import {ExcelComponent} from '../../core/ExcelComponent';
import {createTable} from './table.template';
import {$} from '../../core/Dom';

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

      document.onmousemove = (event) => {
        console.log('onmousemove');
        const delta = Math.floor(event.pageX - coords.right);
        const value = coords.width + delta;
        $parent.$el.style.width = value + 'px';
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
