import {Dom} from '../../core/Dom';

export class TableSelection {
  private group: Dom[];
  constructor() {
    this.group = [];
  }

  select($el: Dom) {
    this.group.push($el);
    $el.addClass('selected');
  }
}
