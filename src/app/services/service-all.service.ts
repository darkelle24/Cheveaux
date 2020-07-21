import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiceAllService {

  projets: ReplaySubject<any> = new ReplaySubject<any>();

  constructor(private http: HttpClient) { }

  getAllProject(): Observable<any> {
    const params = new HttpParams().set('sort', 'updated');
    return this.http.get<any>('https://api.github.com/users/darkelle24/repos', {
      params
    });
  }

  getProjectObserval(): Observable<any> {
    const observerdata = new Observable(observer => {
      this.projets.subscribe(
        (data: any) => {
          observer.next(data);
          observer.complete();
        },
        (err: any) => console.log('error :' + err),
        () => console.log('done data querry')
      );
    });
    return observerdata;
  }
}
