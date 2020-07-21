import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cheval',
  templateUrl: './cheval.component.html',
  styleUrls: ['./cheval.component.scss']
})

export class ChevalComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() language: string;
  @Input() link: string;
  @Input() srcimage: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
    if (this.srcimage === undefined) {
      this.srcimage = null;
    }
  }
}
