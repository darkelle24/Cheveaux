import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toogle = false

  @Output() sendToogle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  eventFromChild(data) {
    this.toogle = data;
    this.sendToogle.emit(this.toogle)
  }

}
