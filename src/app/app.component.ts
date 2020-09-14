import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Elevage de Mandacou';
  toogle = false
  acceuil = false

  constructor(private router: Router, translate: TranslateService) {

    translate.setDefaultLang('en');

    translate.use('en');

    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.acceuil = false
          if (event.url.includes('accueil') || event.url === '/') {
            document.body.style.backgroundColor = '#a5d152';
            this.acceuil = true
          } else if (event.url.includes('contact')) {
            document.body.style.backgroundColor = '#f6f5fb';
          } else {
            document.body.style.backgroundColor = '#fff';
          } /*else if (event.url.includes('projet')) {
            document.body.style.backgroundColor = 'rgba(71, 78, 144, 0.63)';
          } else if (event.url.includes('me')) {
            document.body.style.backgroundColor = 'rgb(59, 59, 59)';
           */
        }
    });
  }

  ngOnInit() {
  }

  eventFromChild(data) {
    this.toogle = data;
  }
}

