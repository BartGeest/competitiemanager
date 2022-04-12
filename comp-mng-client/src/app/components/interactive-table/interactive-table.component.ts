import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-interactive-table',
  templateUrl: './interactive-table.component.html',
  styleUrls: ['./interactive-table.component.css']
})
export class InteractiveTableComponent implements OnInit {

  @Input() columns: string[] = [];

  @Input()
  rows: any[] = [];

  @Input() isRowClickable: boolean = false;

  objectValues = Object.values;

  constructor() { }

  ngOnInit(): void { }

  clickedRow() { //TODO: wtf moet je meegeven...?
    //TODO: functie 'activeren' op basis van boolean?
    // Event Emitter om te zeggen dat er is geklikt?
    // Dat je bijvoorbeeld naar een nieuwe page navigate met de data van de row?
    // Maar er zullen pagina's zijn waarbij clicken op een row niks hoort te doen, dan is het alleen een overzicht...

    //TODO: bespreken met iemand wat een goede aanpak zal zijn
    // - een knop meegeven met daarin de 'actie' die uitgevoerd moet worden wanneer je de generieke component in html zet
    // - altijd de row clickable maken en op basis van whatever wel of niet iets doen
  }

}
