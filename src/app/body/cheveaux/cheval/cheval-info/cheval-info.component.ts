import { Component, OnInit, HostListener, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ServiceAllService } from '../../../../services/service-all.service';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  templateUrl: './cheval-info.component.html',
  styleUrls: ['./cheval-info.component.scss']
})

export class ChevalInfoComponent implements OnInit {

  loading = true
  info: any = null
  @ViewChildren('app') components:QueryList<ElementRef>;
  toActive = -1

  constructor(private projetService: ServiceAllService, private route: ActivatedRoute
    , private viewportScroller: ViewportScroller, private translate: TranslateService) { }

  ngOnInit(): void {
    this.loading = true
    this.getData();
    this.translate.onLangChange.subscribe((event: any) => {
      this.getData()
    });
  }

  @HostListener('window:scroll', ['$event']) checkOffsetTop() {
    const tabOfComponents = this.components.toArray()
    const numberOfElement = tabOfComponents.length
    const windowScroll = window.pageYOffset
    this.toActive = -1
    let i = 1

    do {
      if (windowScroll >= this.getOffset(tabOfComponents[i - 1]) && windowScroll < this.getOffset(tabOfComponents[i])) {
        this.toActive = i - 1
        return
      }
      i++
    } while (i < numberOfElement)
    if (this.getOffset(tabOfComponents[i - 1]) < windowScroll)
      this.toActive = i - 1
  }

  getOffset(element: ElementRef): number {
    if (element === undefined)
      return -1
    return element.nativeElement.offsetTop
  }

  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  getSizeWidth(): number {
    return window.screen.width
  }

  getData() {
    const name = this.route.snapshot.params.name;
    this.projetService.getOneCheval(name, this.translate.currentLang)
      .subscribe(
        (data: any) => {
          this.info = data;
          this.loading = false
        },
        (err: any) => console.log('error :' + err)
    );
  }

}
