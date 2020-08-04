import { Component, OnInit, HostListener, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ServiceAllService } from '../../../../services/service-all.service';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  templateUrl: './cheval-info.component.html',
  styleUrls: ['./cheval-info.component.scss']
})

export class ChevalInfoComponent implements OnInit, AfterViewInit {

  info: any = null
  sizeOfElement: Array<number> = []
  @ViewChildren('app') components:QueryList<ElementRef>;
  toActive = -1

  constructor(private projetService: ServiceAllService, private route: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    const name = this.route.snapshot.params.name;
    this.projetService.getOneCheval(name)
      .subscribe(
        (data: any) => {
          this.info = data;
        },
        (err: any) => console.log('error :' + err)
      );
  }

  ngAfterViewInit() {
    this.sizeOfElement = []
    this.components.changes.subscribe(c => {
      this.components.forEach(element => this.sizeOfElement.push(element.nativeElement.offsetTop))
    })
  }

  @HostListener('window:scroll', ['$event']) checkOffsetTop() {
    const numberOfElemnt = this.sizeOfElement.length
    const windowScroll = window.pageYOffset
    this.toActive = -1
    let i = 1

    do {
      if (windowScroll >= this.sizeOfElement[i - 1] && windowScroll < this.sizeOfElement[i]) {
        this.toActive = i - 1
        break
      }
      i++
    } while (i < numberOfElemnt)
    if (this.sizeOfElement[i - 1] < windowScroll)
      this.toActive = i - 1
  }

  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

}
