export function isCell(event: {target: HTMLElement}) {
  return event.target.dataset.type === 'cell';
}
