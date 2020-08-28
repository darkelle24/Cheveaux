import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceAllService {

  projets: ReplaySubject<any> = new ReplaySubject<any>();

  constructor(private http: HttpClient) { }

  getAllChevaux(): Observable<any> {
    return this.http.get<any>('assets/infoChevaux.json');
  }

  getOneCheval(name: string, lang: string = 'en'): Observable<any> {
    return this.http.get<any>('assets/chevalInfo/' + lang + '/' + name.replace(' ', '_').toLowerCase() + '.json');
  }
}
