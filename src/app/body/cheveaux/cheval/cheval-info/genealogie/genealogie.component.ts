import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-genealogie',
  templateUrl: './genealogie.component.html',
  styleUrls: ['./genealogie.component.scss']
})
export class GenealogieComponent implements OnInit {

  @Input() genealogie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
