import { Component, ViewChild, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer} from '@angular/platform-browser';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-carrousselle',
  templateUrl: './carrousselle.component.html',
  styleUrls: ['./carrousselle.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CarrousselleComponent implements OnInit {
  @Input() caroussel: any;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    for (const content of this.caroussel.contents) {
      if (content.hasOwnProperty('video')) {
        if (content.video.src.startsWith('https://www.youtube.com/watch?v='))
        content.video.src = content.video.src.replace('https://www.youtube.com/watch?v=', 'http://www.youtube.com/embed/')
        content.video.src = this.sanitizer.bypassSecurityTrustResourceUrl(content.video.src);
      }
    }
    console.log(this.caroussel.contents)
  }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
