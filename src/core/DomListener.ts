export class DomListener {
  private $root: HTMLElement;
  constructor($root: HTMLElement) {
    if (!$root) {
      throw new Error('No $root provided in DomListener');
    }
    this.$root = $root;
  }
}
