import {$, Dom} from '../../core/Dom';

export function resizeHandler($root: Dom, event: {target: HTMLElement}) {
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
  const cells = $root.findAll(`[data-col="${$parent.data.col}"]`);

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
