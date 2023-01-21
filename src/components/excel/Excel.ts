import {Header} from '../header/Header';
import {$, Dom} from '../../core/Dom';

export interface OptionsI {
  components: (typeof Header)[];
}

export interface ExcelI {
  selector: string;
  options: OptionsI;
}

export class Excel {
  private $el: Dom;
  private Components: typeof Header[];
  private components: Header[];
  constructor({selector, options}: ExcelI) {
    this.$el = $(selector);
    this.Components = options.components || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    this.components = this.Components.map((Component) => {
      const $el = $.create('div', Component.className);
      // @ts-ignore
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
}
