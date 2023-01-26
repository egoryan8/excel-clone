const CODES = {
  A: 65,
  Z: 90,
};


function toCell(row: number) {
  return function(_: never, col: number) {
    return `
    <div 
    class="cell" 
    contenteditable 
    data-col="${col}" 
    data-id="${row}:${col}"
    data-type="cell"
    ></div>
  `;
  };
}

function toColumn(col: string, index: number) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="col-resize" data-resize="col"></div>
    </div>
  `;
}

function createRow(index: number | null, content: string) {
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${index ? '<div class="row-resize" data-resize="row"></div>' : ''}
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

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell(row))
        .join('');

    rows.push(createRow(row + 1, cells));
  }
  return rows.join('');
}
