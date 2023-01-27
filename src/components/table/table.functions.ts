import {Dom} from '../../core/Dom';
import {range} from '../../core/utils';

export function isCell(event: {target: HTMLElement}) {
  return event.target.dataset.type === 'cell';
}

export function matrix($target: Dom, $current: Dom) {
  const target = $target.id(true);
  const current = $current.id(true);
  const cols = range(current.col, target.col);
  const rows = range(current.row, target.row);
  return cols.reduce((acc, col) => {
    rows.forEach((row) => acc.push(`${row}:${col}`));
    return acc;
  }, []);
}
