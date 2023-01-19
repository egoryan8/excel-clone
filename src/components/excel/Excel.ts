import {Header} from '../header/Header';

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
    const $root = document.createElement('div');
    this.components.forEach((Component) => {
      const component = new Component();
      $root.insertAdjacentHTML('beforeend', component.toHTML());
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
