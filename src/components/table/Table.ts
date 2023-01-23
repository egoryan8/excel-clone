import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root: HTMLElement) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  onMousedown(event: {target: HTMLElement}) {
    if (event.target.dataset.resize) {
      console.log('Start resizing', event.target.dataset.resize);
    }
  }
  toHTML(): string {
    return createTable();
  }
}
