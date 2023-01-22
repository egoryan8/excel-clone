import {DomListener} from './DomListener';

export interface OptionsI {
  name: string;
  listeners: string[];
}
export class ExcelComponent extends DomListener {
  // eslint-disable-next-line max-len
  constructor($root: HTMLElement, options: OptionsI | Record<string, any> = {}) {
    super($root, options.listeners);
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
