import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Elevage de Mandacou';
  loading = true;

  constructor(private router: Router) {

    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
          console.log(event.url)
          if (event.url.includes('accueil') || event.url === '/') {
            document.body.style.backgroundColor = '#a5d152';
          } else {
            document.body.style.backgroundColor = '#fff';
          } /*else if (event.url.includes('projet')) {
            document.body.style.backgroundColor = 'rgba(71, 78, 144, 0.63)';
          } else if (event.url.includes('me')) {
            document.body.style.backgroundColor = 'rgb(59, 59, 59)';
          } else if (event.url.includes('contact')) {
            document.body.style.backgroundColor = 'rgb(220, 220, 220)';
           */
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

