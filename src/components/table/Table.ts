import {ExcelComponent} from '../../core/ExcelComponent';

export class Table extends ExcelComponent {
  toHTML(): string {
    return '<h1>Table</h1>';
  }
}
