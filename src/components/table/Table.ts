import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {Dom} from '../../core/Dom';
import {resizeHandler} from './table.resize';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root: HTMLElement) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  onMousedown(event: {target: HTMLElement}) {
    if (event.target.dataset.resize && this.$root instanceof Dom) {
      resizeHandler(this.$root, event);
    }
  }
  toHTML(): string {
    return createTable();
  }
}
