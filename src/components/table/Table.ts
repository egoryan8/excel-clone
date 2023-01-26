import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {Dom} from '../../core/Dom';
import {resizeHandler} from './table.resize';
import {TableSelection} from './TableSelection';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  private selection: TableSelection;
  constructor($root: HTMLElement) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();
    if (this.$root instanceof Dom) {
      const $cell = this.$root.find('[data-id="0:0"]');
      this.selection.select($cell);
    }
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
