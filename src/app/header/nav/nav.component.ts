import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from '../../services/service-all.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  projets: any[];

  constructor(private projetService: ServiceAllService) { }

  ngOnInit() {
    this.projetService.getAllChevaux()
      .subscribe(
        (data: any) => {
          this.projets = data;
        },
        (err: any) => console.log('error :' + err)
      );
  }
}
