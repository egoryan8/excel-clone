import {ExcelComponent} from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  constructor($root: HTMLElement) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  static className = 'excel__formula';
  toHTML(): string {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(e: { target: HTMLDivElement }) {
    console.log(this.$root);
    console.log('Formula: onInput', e.target.textContent);
  }

  onClick() {
    console.log('click');
  }
}
