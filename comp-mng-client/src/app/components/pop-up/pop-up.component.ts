import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

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
