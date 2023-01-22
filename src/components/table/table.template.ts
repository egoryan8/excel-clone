const CODES = {
  A: 65,
  Z: 90,
};

// function createCell() {
//   return `
//     <div class="cell" contenteditable>A1</div>
//   `;
// }

function toColumn(col: string) {
  return `
    <div class="column">
      ${col}
    </div>
  `;
}

function createRow(content: string) {
  return `
    <div class="row">
      <div class="row-info"></div>
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


  rows.push(createRow(cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow('a'));
  }
  return rows.join('');
}
