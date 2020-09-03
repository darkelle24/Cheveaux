import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from '../../services/service-all.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  save: any[] = null;
  news: any[] = null;
  loading = true

  constructor(private projetService: ServiceAllService, private translate: TranslateService) { }

  ngOnInit() {
    this.loading = true
    this.getData();
    this.translate.onLangChange.subscribe((event: any) => {
      this.getData()
    });
  }

  getData() {
    this.projetService.getNews(this.translate.currentLang)
      .subscribe(
        (data: any) => {
          this.news = data;
          this.loading = false;
        },
        (err: any) => console.log('error :' + err)
    );
  }

}
