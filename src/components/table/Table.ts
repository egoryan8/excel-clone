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
      const sideProp = type === 'col' ? 'bottom' : 'right';
      let value: number;
      $resizer.css({
        opacity: 1,
        [sideProp]: '-5000px',
      });
      const cells = this.$root instanceof Dom ? this.$root.findAll(`[data-col="${$parent.data.col}"]`) : '';

      document.onmousemove = (event) => {
        if (type === 'col') {
          const delta = Math.floor(event.pageX - coords.right);
          $resizer.css({right: -delta + 'px'});
          value = coords.width + delta;
        } else {
          const delta = Math.floor(event.pageY - coords.bottom);
          value = coords.height + delta;
          $resizer.css({bottom: -delta + 'px'});
        }
      };

      document.onmouseup = (event) => {
        document.onmousemove = null;
        document.onmouseup = null;

        if (type === 'col') {
          $parent.css({width: value + 'px'});
          // @ts-ignore
          cells.forEach((el) => el.style.width = value + 'px');
        } else {
          $parent.css({height: value + 'px'});
        }

        $resizer.css({
          opacity: 0,
          bottom: 0,
          right: 0,
        });
      };
    }
  }
  toHTML(): string {
    return createTable();
  }
}
