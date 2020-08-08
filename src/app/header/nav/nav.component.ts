import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { ServiceAllService } from '../../services/service-all.service';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  projets: any[];

  mobile = false

  toActive = 0

  toogle = false

  @Output() sendToogle = new EventEmitter<boolean>();

  constructor(private projetService: ServiceAllService, private router: Router) { }

  ngOnInit() {
    this.projetService.getAllChevaux()
      .subscribe(
        (data: any) => {
          this.projets = data;
        },
        (err: any) => console.log('error :' + err)
    );

    if (window.screen.width <= 575) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }

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
        console.log(this.toActive)
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    if (window.screen.width <= 575) {
      this.mobile = true;
    } else {
      this.toogle = false
      this.sendToogle.emit(this.toogle)
      this.mobile = false;
    }
  }

  activeToogle() {
    if (this.toogle === false)
      this.toogle = true
    else
      this.toogle = false
    this.sendToogle.emit(this.toogle)
  }
}
