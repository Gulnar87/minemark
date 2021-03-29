import { Injectable } from "@angular/core";

import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { Publication } from "./publications.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({
  providedIn: "root",
})
export class PublicationsResolverService implements Resolve<Publication[]> {
  constructor(private dataStorageService: DataStorageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorageService.getWorks();
  }
}
