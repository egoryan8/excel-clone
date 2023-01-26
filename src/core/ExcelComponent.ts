import {DomListener} from './DomListener';

export interface OptionsI {
  name: string;
  listeners: string[];
}
export class ExcelComponent extends DomListener {
  // eslint-disable-next-line max-len
  private name: string;
  constructor($root: HTMLElement, options: OptionsI | Record<string, any> = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.prepare();
  }

  prepare() {

  }

  // Возвращает шаблон компонента
  toHTML() {
    return '';
  }

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}
