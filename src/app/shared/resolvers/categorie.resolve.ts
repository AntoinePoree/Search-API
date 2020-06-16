import { ICategorie } from '../model/categorie';
import { CategoriesService } from '../services/categories.service';
import { EntriesService } from '../services/entries.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CategorieResolver implements Resolve<ICategorie[]> {
  constructor(private entriesService: EntriesService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.entriesService.getByCategory(route.queryParams.categorie);
  }
}
