import {ExcelComponent} from '../../core/ExcelComponent';

export class Toolbar extends ExcelComponent {
  toHTML(): string {
    return '<h1>Toolbar</h1>';
  }
}
