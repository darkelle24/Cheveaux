import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from '../../services/service-all.service';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  projets: any[];

  toActive = 0

  constructor(private projetService: ServiceAllService, private router: Router) { }

  ngOnInit() {
    this.projetService.getAllChevaux()
      .subscribe(
        (data: any) => {
          this.projets = data;
        },
        (err: any) => console.log('error :' + err)
    );

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('accueil') || event.url === '/') {
          this.toActive = 0
        } else if (event.url.includes('cheveaux')) {
          this.toActive = 2
        } else if (event.url.includes('info')) {
          this.toActive = 3
        } else if (event.url.includes('actualit%C3%A9')) {
          this.toActive = 1
        } else if (event.url.includes('contact')) {
          this.toActive = 4
        } else {
          this.toActive = -1
        }
      }
    });
  }
}
