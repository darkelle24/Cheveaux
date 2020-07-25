import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { ServiceAllService } from './services/service-all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Darkelle24 Blog';
  loading = true;

  constructor(private router: Router, private service: ServiceAllService) {

    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
          if (event.url.includes('acceuil')) {
            document.body.style.backgroundColor = '#a5d152';
          } /*else if (event.url.includes('projet')) {
            document.body.style.backgroundColor = 'rgba(71, 78, 144, 0.63)';
          } else if (event.url.includes('me')) {
            document.body.style.backgroundColor = 'rgb(59, 59, 59)';
          } else if (event.url.includes('contact')) {
            document.body.style.backgroundColor = 'rgb(220, 220, 220)';
          } else {
            document.body.style.backgroundColor = 'rgb(228, 77, 38, 0.15)';
          } */
        }
        if (event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError) {
            this.loading = false;
          }
    });
  }

  ngOnInit() {
  }
}

