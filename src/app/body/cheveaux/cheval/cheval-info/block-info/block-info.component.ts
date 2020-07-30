import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.scss']
})
export class BlockInfoComponent implements OnInit {

  @Input() block: any;

  constructor() { }

  ngOnInit(): void {
  }

}
