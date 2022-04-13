import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-interactive-table',
  templateUrl: './interactive-table.component.html',
  styleUrls: ['./interactive-table.component.css']
})
export class InteractiveTableComponent implements OnInit {

  @Input()
  columns: string[] = [];

  @Input()
  rows: any[] = [];

  @Input() isRowClickable: boolean = false;

  @Output() eventEmitter = new EventEmitter<void>();

  objectValues = Object.values;

  constructor() { }

  ngOnInit(): void { }

  clickedRow(row?: any) {

    if (this.isRowClickable) {
      //TODO: row data meegeven (nodig voor back-end call om data op te halen in volgende scherm?)
      this.eventEmitter.emit();
    }
  }

}
