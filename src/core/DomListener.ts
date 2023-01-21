export class DomListener {
  private $root: HTMLElement;
  private listeners: string[];
  constructor($root: HTMLElement, listeners: string[] = []) {
    if (!$root) {
      throw new Error('No $root provided in DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    console.log(this.listeners);
  }

  removeDomListeners() {

  }
}
