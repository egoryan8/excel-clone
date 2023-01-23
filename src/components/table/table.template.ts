const CODES = {
  A: 65,
  Z: 90,
};

function toCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}

function toColumn(col: string) {
  return `
    <div class="column">
      ${col}
      <div class="col-resize"></div>
    </div>
  `;
}

function createRow(index: number | null, content: string) {
  return `
    <div class="row">
      <div class="row-info">
        ${index ? index : ''}
        ${index ? '<div class="row-resize"></div>' : ''}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_: never, index: number) {
  return String.fromCharCode(CODES.A + index);
}
export function createTable(rowsCount = 25) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');

    rows.push(createRow(i + 1, cells));
  }
  return rows.join('');
}
