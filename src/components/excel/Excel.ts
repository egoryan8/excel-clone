interface OptionsI {
  components: string[];
}

export interface ExcelI {
  selector: string;
  options: OptionsI;
}

export class Excel {
  private $el: Element;
  private components: string[];
  constructor({selector, options}: ExcelI) {
    this.$el = document.querySelector(selector);
    this.components = options.components || [];
  }
}
