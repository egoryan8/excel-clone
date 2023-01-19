import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  toHTML(): string {
    return '<h1>Header</h1>';
  }
}
