import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root: HTMLElement) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  static className = 'excel__formula';
  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(e: Event) {
    console.log('Formula: onInput', e.target);
  }
}
