import {Header} from '../header/Header';
import {$} from '../../core/Dom';

interface OptionsI {
  components: typeof Header[];
}

export interface ExcelI {
  selector: string;
  options: OptionsI;
}

export class Excel {
  private $el: Element;
  private components: typeof Header[];
  constructor({selector, options}: ExcelI) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    this.components.forEach((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);

      $el.insertAdjacentHTML('afterbegin', component.toHTML());
      $root.append($el);
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
