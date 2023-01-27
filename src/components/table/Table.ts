import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {$, Dom} from '../../core/Dom';
import {resizeHandler} from './table.resize';
import {TableSelection} from './TableSelection';
import {isCell, matrix, nextSelector} from './table.functions';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  private selection: TableSelection;
  constructor($root: HTMLElement) {
    super($root, {
      listeners: ['mousedown', 'keydown'],
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

  toHTML(): string {
    return createTable();
  }

  onMousedown(event: {target: HTMLElement, shiftKey: boolean}) {
    if (event.target.dataset.resize && this.$root instanceof Dom) {
      resizeHandler(this.$root, event);
    } else if (isCell(event)) {
      const $target = $(event.target);
      if (event.shiftKey) {
        // @ts-ignore
        const $cells = matrix($target, this.selection.current).map((id) => this.$root.find(`[data-id="${id}"]`));
        this.selection.selectGroup($cells);
      } else {
        this.selection.select($target);
      }
    }
  }

  onKeydown(event: KeyboardEvent) {
    this.$root = this.$root as Dom;
    const codes = ['Tab', 'Enter', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];
    const {key} = event;
    if (codes.includes(key) && !event.shiftKey) {
      event.preventDefault();
      const id = this.selection.current.id(true);
      const $next = this.$root.find(nextSelector(key, id));
      this.selection.select($next);
    }
  }
}


