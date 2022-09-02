import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  @Input() modalTitle = 'Titel';

  @Input() modalMessage = 'Het bericht wat getoond wordt.';

  @Input() info: any;

  @Input() footerCancelButtonLabel: string = 'Cancel';

  @Input() footerActionButtonLabel: string = 'Action';

  @Input() showCancelButton = false;

  @Input() openModal: boolean = false;

  @Output() modalEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onModalClick(...items: any) {
    this.modalEvent.emit();
  }

}
