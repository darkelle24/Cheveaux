import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ServiceAllService } from './service-all.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsResolverService implements Resolve<any> {

  constructor(private projetService: ServiceAllService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.projetService.getProjectObserval();
  }
}
