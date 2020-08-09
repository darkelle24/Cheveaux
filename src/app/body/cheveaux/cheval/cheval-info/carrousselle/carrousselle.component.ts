import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-carrousselle',
  templateUrl: './carrousselle.component.html',
  styleUrls: ['./carrousselle.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CarrousselleComponent implements OnInit {
  @Input() caroussel: any;

  position = 0

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
  }

  prevObject() {
    this.position -= 1
    if (this.position < 0)
      this.position = this.caroussel.contents.length - 1
  }

  nextObject() {
    this.position += 1
    if (this.position >= this.caroussel.contents.length)
      this.position = 0
  }
}
