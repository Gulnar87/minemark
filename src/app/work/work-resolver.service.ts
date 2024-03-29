import { Injectable } from '@angular/core';

import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Work } from './work.model';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WorkResolverService implements Resolve<Work[]>{

  constructor(private dataStorageService: DataStorageService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorageService.getWorks();
  }
}





