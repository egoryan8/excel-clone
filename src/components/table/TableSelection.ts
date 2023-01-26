import {Dom} from '../../core/Dom';

export class TableSelection {
  static className = 'selected';
  private group: Dom[];
  constructor() {
    this.group = [];
  }

  select($el: Dom) {
    this.clear();
    this.group.push($el);
    $el.addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup() {

  }
}
