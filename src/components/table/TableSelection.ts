import {Dom} from '../../core/Dom';

export class TableSelection {
  static className = 'selected';
  private group: Dom[];
  current: Dom | null;
  constructor() {
    this.group = [];
    this.current = null;
  }

  select($el: Dom) {
    this.clear();
    this.group.push($el);
    this.current = $el;
    $el.addClass(TableSelection.className);
  }

  clear() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.className));
    this.group = [];
  }

  selectGroup($group: Dom[]) {
    this.clear();
    this.group = $group;
    this.group.forEach((el) => el.addClass(TableSelection.className));
  }
}
