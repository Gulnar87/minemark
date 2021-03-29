import { Injectable } from "@angular/core";

import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

import { Publications } from "./publications.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({
  providedIn: "root",
})
export class PublcicationsResolverService implements Resolve<Publications[]> {
  constructor(private dataStorageService: DataStorageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorageService.getWorks();
  }
}
