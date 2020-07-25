import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cheval',
  templateUrl: './cheval.component.html',
  styleUrls: ['./cheval.component.scss']
})

export class ChevalComponent implements OnInit {

  @Input() name: string;
  @Input() prixMin: number;
  @Input() prixMax: number;
  @Input() srcimage: string;
  @Input() pereMere: string;
  @Input() pere: string;
  @Input() race: string;
  @Input() robe: string;
  @Input() sexe: string;
  @Input() naissance: number;

  constructor() { }

  ngOnInit() {
    if (this.srcimage === undefined) {
      this.srcimage = null;
    }
  }
}
