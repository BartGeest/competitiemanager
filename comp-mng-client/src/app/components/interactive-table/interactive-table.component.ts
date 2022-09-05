import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-interactive-table',
  templateUrl: './interactive-table.component.html',
  styleUrls: ['./interactive-table.component.css']
})
export class InteractiveTableComponent implements OnInit {

  @Input() columns: string[] = [];

  @Input() rows: any[] = [];

  @Input() isRowClickable: boolean = false;

  @Output() eventEmitter = new EventEmitter<any>();

  objectValues = Object.values;

  constructor() { }

  ngOnInit(): void { }

  clickedRow(row?: any) {

    if (this.isRowClickable) {
      this.eventEmitter.emit(row);
    }
  }

}
