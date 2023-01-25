import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {$, Dom} from '../../core/Dom';

export class Table extends ExcelComponent {
  static className = 'excel__table';
  constructor($root: HTMLElement) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  onMousedown(event: {target: HTMLElement}) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target);
      const $parent = $resizer.closest('[data-type="resizable"]');
      const coords = $parent.getCoords();
      const cells = this.$root instanceof Dom ? this.$root.findAll(`[data-col="${$parent.data.col}"]`) : '';

      document.onmousemove = (event) => {
        console.log('onmousemove');
        const delta = Math.floor(event.pageX - coords.right);
        const value = coords.width + delta;
        $parent.$el.style.width = value + 'px';
        // @ts-ignore
        cells.forEach((el) => el.style.width = value + 'px');
      };

      document.onmouseup = (event) => {
        document.onmousemove = null;
      };
    }
  }
  toHTML(): string {
    return createTable();
  }
}
