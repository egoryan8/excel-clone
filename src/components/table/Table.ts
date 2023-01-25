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
      const type = event.target.dataset.resize;
      const cells = this.$root instanceof Dom ? this.$root.findAll(`[data-col="${$parent.data.col}"]`) : '';

      document.onmousemove = (event) => {
        if (type === 'col') {
          const delta = Math.floor(event.pageX - coords.right);
          const value = coords.width + delta;
          $parent.css({width: value + 'px'});
          // @ts-ignore
          cells.forEach((el) => el.style.width = value + 'px');
        } else {
          const delta = Math.floor(event.pageY - coords.bottom);
          const value = coords.height + delta;
          $parent.css({height: value + 'px'});
        }
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
