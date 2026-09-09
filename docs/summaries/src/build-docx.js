/**
 * Genera il documento Word con i riassunti di studio per l'esame ECBA.
 * Il contenuto vive nei file content-*.js come blocchi tipizzati; qui si
 * traduce in elementi docx e si impagina.
 */
const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType, ShadingType: ST,
  PageBreak, Header, Footer, PageNumber, LevelFormat, TableOfContents, convertInchesToTwip
} = require('docx');

// Il documento esiste in due lingue: `node build-docx.js <out.docx> [it|en]`.
const LANG = process.argv[3] === 'en' ? 'en' : 'it';
const SUFFIX = LANG === 'en' ? '-en' : '';

const SECTIONS = [1, 2, 3, 4].reduce(function (acc, n) {
  return acc.concat(require('./content-' + n + SUFFIX + '.js'));
}, []);

const UI = require('./ui-strings.js')[LANG];

const ACCENT = '2F5DE3';
const INK = '16181D';
const MUTED = '5C6572';
const RULE = 'DFE3E8';
const KEY_BG = 'E8EDFD';
const TRAP_BG = 'FBEAE8';
const TRAP_INK = 'A02A20';
const HEAD_BG = 'F0F2F5';

// ---------------------------------------------------------------- helper

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after !== undefined ? opts.after : 120, line: 276 },
    alignment: opts.align,
    children: [new TextRun({
      text: text,
      size: opts.size || 20,
      bold: opts.bold,
      italics: opts.italics,
      color: opts.color || INK,
      font: 'Calibri'
    })]
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 0, after: 60 },
    children: [new TextRun({ text: text, size: 36, bold: true, color: ACCENT, font: 'Calibri' })]
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 6 } },
    children: [new TextRun({ text: text, size: 26, bold: true, color: INK, font: 'Calibri' })]
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 260, after: 100 },
    children: [new TextRun({ text: text, size: 22, bold: true, color: ACCENT, font: 'Calibri' })]
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: 'punti', level: 0 },
    spacing: { after: 80, line: 276 },
    children: [new TextRun({ text: text, size: 20, color: INK, font: 'Calibri' })]
  });
}

function cell(text, opts = {}) {
  return new TableCell({
    width: { size: opts.width, type: WidthType.DXA },
    margins: { top: 90, bottom: 90, left: 120, right: 120 },
    shading: opts.bg ? { type: ST.CLEAR, fill: opts.bg, color: 'auto' } : undefined,
    children: [new Paragraph({
      spacing: { after: 0, line: 264 },
      children: [new TextRun({
        text: text,
        size: 19,
        bold: opts.bold,
        color: opts.color || INK,
        font: 'Calibri'
      })]
    })]
  });
}

function table(head, rows, widths) {
  const border = { style: BorderStyle.SINGLE, size: 4, color: RULE };
  const trs = [];

  if (head && head.some(function (h) { return h; })) {
    trs.push(new TableRow({
      tableHeader: true,
      children: head.map(function (t, i) {
        return cell(t, { width: widths[i], bold: true, bg: HEAD_BG });
      })
    }));
  }

  rows.forEach(function (r) {
    trs.push(new TableRow({
      children: r.map(function (t, i) {
        // La prima colonna fa da etichetta: in grassetto, come nelle liste.
        return cell(t, { width: widths[i], bold: i === 0 && r.length > 1 });
      })
    }));
  });

  return new Table({
    columnWidths: widths,
    width: { size: widths.reduce(function (a, b) { return a + b; }, 0), type: WidthType.DXA },
    borders: { top: border, bottom: border, left: border, right: border,
               insideHorizontal: border, insideVertical: border },
    rows: trs
  });
}

/** Riquadro evidenziato: azzurro per i punti da sapere, rosso per le trappole. */
function box(text, kind) {
  const isTrap = kind === 'trap';
  const label = isTrap ? UI.trapLabel : UI.keyLabel;
  return new Table({
    columnWidths: [9000],
    width: { size: 9000, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.SINGLE, size: 18, color: isTrap ? TRAP_INK : ACCENT },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE }
    },
    rows: [new TableRow({ children: [new TableCell({
      width: { size: 9000, type: WidthType.DXA },
      margins: { top: 120, bottom: 120, left: 160, right: 160 },
      shading: { type: ST.CLEAR, fill: isTrap ? TRAP_BG : KEY_BG, color: 'auto' },
      children: [
        new Paragraph({
          spacing: { after: 40 },
          children: [new TextRun({
            text: label, size: 15, bold: true, characterSpacing: 20,
            color: isTrap ? TRAP_INK : ACCENT, font: 'Calibri'
          })]
        }),
        new Paragraph({
          spacing: { after: 0, line: 264 },
          children: [new TextRun({ text: text, size: 19, color: INK, font: 'Calibri' })]
        })
      ]
    })] })]
  });
}

/**
 * Riga di rimando allo studio sotto un'activity statement: le sezioni del
 * Business Analysis Standard e del BABOK Guide che l'ECBA Syllabus Map
 * associa a quella activity.
 */
function refline(text) {
  return new Paragraph({
    spacing: { after: 140, line: 264 },
    children: [
      new TextRun({ text: UI.refLabel + ' ', size: 17, bold: true, color: ACCENT, font: 'Calibri' }),
      new TextRun({ text: text, size: 17, italics: true, color: MUTED, font: 'Calibri' })
    ]
  });
}

function spacer(h) { return new Paragraph({ spacing: { after: h || 160 }, children: [] }); }

// ------------------------------------------------------------- contenuto

const children = [];

// --- Copertina ---
children.push(spacer(2400));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 80 },
  children: [new TextRun({ text: 'ECBA', size: 88, bold: true, color: ACCENT, font: 'Calibri' })]
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 400 },
  children: [new TextRun({ text: UI.subtitle, size: 30, color: INK, font: 'Calibri' })]
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 120 },
  children: [new TextRun({
    text: UI.credential,
    size: 22, color: MUTED, font: 'Calibri'
  })]
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 1200 },
  children: [new TextRun({
    text: UI.scope,
    size: 22, color: MUTED, font: 'Calibri'
  })]
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 60 },
  children: [new TextRun({
    text: UI.format,
    size: 20, color: INK, font: 'Calibri'
  })]
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [new TextRun({
    text: UI.sources,
    size: 18, italics: true, color: MUTED, font: 'Calibri'
  })]
}));
children.push(new Paragraph({ children: [new PageBreak()] }));

// --- Introduzione, dalle stringhe di lingua ---
children.push(h1(UI.intro.title));
UI.intro.blocks.forEach(function (b) {
  if (b.t === 'p') children.push(p(b.v));
  else if (b.t === 'h3') children.push(h3(b.v));
  else if (b.t === 'ref') children.push(refline(b.v));
  else if (b.t === 'ul') b.v.forEach(function (item) { children.push(bullet(item)); });
  else if (b.t === 'table') {
    children.push(spacer(120));
    children.push(table(b.head, b.rows, b.widths));
    children.push(spacer(200));
  } else if (b.t === 'key' || b.t === 'trap') {
    children.push(spacer(160));
    children.push(box(b.v, b.t));
    children.push(spacer(200));
  }
});
children.push(new Paragraph({ children: [new PageBreak()] }));

// --- Sezioni ---
SECTIONS.forEach(function (sec, idx) {
  const isAppendix = typeof sec.id === 'string';
  children.push(h1(isAppendix
    ? UI.appendix + ' ' + sec.id + ' — ' + sec.title
    : UI.domain + ' ' + sec.id + ' — ' + sec.title));

  children.push(new Paragraph({
    spacing: { after: 60 },
    children: [new TextRun({
      text: isAppendix ? sec.questions : sec.weight + UI.ofTheExam + sec.questions,
      size: 20, bold: true, color: ACCENT, font: 'Calibri'
    })]
  }));
  children.push(new Paragraph({
    spacing: { after: 260 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RULE, space: 8 } },
    children: [new TextRun({ text: sec.source, size: 18, italics: true, color: MUTED, font: 'Calibri' })]
  }));

  sec.blocks.forEach(function (b) {
    if (b.t === 'p') children.push(p(b.v));
    else if (b.t === 'h3') children.push(h3(b.v));
    else if (b.t === 'ref') children.push(refline(b.v));
    else if (b.t === 'ul') b.v.forEach(function (item) { children.push(bullet(item)); });
    else if (b.t === 'table') {
      children.push(spacer(60));
      children.push(table(b.head, b.rows, b.widths));
      children.push(spacer(160));
    } else if (b.t === 'key' || b.t === 'trap') {
      children.push(spacer(60));
      children.push(box(b.v, b.t));
      children.push(spacer(160));
    }
  });

  if (idx < SECTIONS.length - 1) children.push(new Paragraph({ children: [new PageBreak()] }));
});

// ------------------------------------------------------------- documento

const doc = new Document({
  creator: 'ECBA Trainer',
  title: UI.docTitle,
  description: UI.docDescription,
  numbering: {
    config: [{
      reference: 'punti',
      levels: [{
        level: 0,
        format: LevelFormat.BULLET,
        text: '•',
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 360, hanging: 220 } } }
      }]
    }]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },          // A4
        margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 }
      }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 6 } },
        children: [new TextRun({ text: UI.runningHead, size: 16, color: MUTED, font: 'Calibri' })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MUTED, font: 'Calibri' })]
      })] })
    },
    children: children
  }]
});

Packer.toBuffer(doc).then(function (buf) {
  fs.writeFileSync(process.argv[2] || 'ECBA-riassunti.docx', buf);
  console.log('scritto:', process.argv[2] || 'ECBA-riassunti.docx', '-', buf.length, 'byte');
});
