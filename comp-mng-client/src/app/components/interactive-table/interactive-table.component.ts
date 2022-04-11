import {Component, Input, OnInit} from '@angular/core';
import {CompetitionRow} from "../../model/CompetitionRow";

@Component({
  selector: 'app-interactive-table',
  templateUrl: './interactive-table.component.html',
  styleUrls: ['./interactive-table.component.css']
})
export class InteractiveTableComponent implements OnInit {

  @Input() caption: string;
  @Input() columns: string[];

  rows: any[];

  objectValues = Object.values;

  //even ter test,
  test1: CompetitionRow = new CompetitionRow(1, 'kaas', 10, 100, new Date());
  test2: CompetitionRow = new CompetitionRow(1, 'kaas', 10, 100, new Date());
  test3: CompetitionRow = new CompetitionRow(1, 'kaas', 10, 100, new Date());
  test4: CompetitionRow = new CompetitionRow(1, 'kaas', 10, 100, new Date());
  test5: CompetitionRow = new CompetitionRow(1, 'kaas', 10, 100, new Date());

  constructor() {
    this.caption = 'placeholder caption';
    this.columns = ['id', 'name', 'contenders', 'max', 'time'];
    this.rows = [];
    this.rows.push(this.test1, this.test2, this.test3, this.test4, this.test5);
  }

  ngOnInit(): void {
  }

  clickedRow(id: number) {
    console.log(id);
    console.log('HEHFSENFKESNF');
  }

}
