import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LABELS} from "../../constants/constants";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Input() modalTitle = 'Titel';

  @Input() modalMessage = 'Het bericht wat getoond wordt.';

  @Input() selections: string[] = [];

  @Input() footerCancelButtonLabel: string = LABELS.cancel;

  @Input() footerActionButtonLabel: string = 'Action';

  @Input() showCancelButton = false;

  @Input() openModal: boolean = false;

  @Output() onActionEvent = new EventEmitter<string>();

  @Output() onCancelEvent = new EventEmitter<void>();

  selectedItem: string = '';

  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.selections[0];
  }

  onActionClick(): void {
    this.onActionEvent.emit(this.selectedItem);
  }

  onCancelClick(): void {
    this.onCancelEvent.emit();
  }

  selectionChange(item: string): void {
    this.selectedItem = item;
  }

}
