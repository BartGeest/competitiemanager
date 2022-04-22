import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  //TODO: uitbreiden zodat dit functioneel is op de plekken waar het wordt gebruikt

  @Input() footerCancelButtonLabel: string = 'Cancel';

  @Input() footerActionButtonLabel: string = 'Action';

  @Input() openModal: boolean = false;

  @Output() modalEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onModalClick() {
    console.log('inside onModalClick')
    this.modalEvent.emit();
  }

}
