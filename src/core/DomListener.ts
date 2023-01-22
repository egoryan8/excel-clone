import {capitalize} from './utils';
import {Dom} from './Dom';

export class DomListener {
  protected $root: HTMLElement | Dom;
  private listeners: string[];
  constructor($root: HTMLElement | Dom, listeners: string[] = []) {
    if (!$root) {
      throw new Error('No $root provided in DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method: any = getMethodName(listener);
      // @ts-ignore
      if (!this[method]) {
        throw new Error(`method ${method} is not defined in Component`);
      }
      if (this.$root instanceof Dom) {
        // @ts-ignore
        this[method] = this[method].bind(this);
        // @ts-ignore
        this.$root.on(listener, this[method]);
      }
    });
  }

  removeDomListeners() {

  }
}

function getMethodName(event: string) {
  return 'on' + capitalize(event);
}
