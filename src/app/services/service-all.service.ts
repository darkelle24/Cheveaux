import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceAllService {

  projets: ReplaySubject<any> = new ReplaySubject<any>();

  constructor(private http: HttpClient) { }

  getAllChevaux(lang: string = 'en'): Observable<any> {
    return this.http.get<any>('assets/data/' + lang + '/infoChevaux.json');
  }

  getOneCheval(name: string, lang: string = 'en'): Observable<any> {
    return this.http.get<any>('assets/data/' + lang + '/chevalInfo/' + name.replace(' ', '_').toLowerCase() + '.json');
  }

  getNews(lang: string = 'en'): Observable<any> {
    return this.http.get<any>('assets/data/' + lang + '/news.json');
  }
}
