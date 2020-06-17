import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CategoriesService } from '../shared/services/categories.service';
import { EntriesService } from '../shared/services/entries.service';
import { IEntrie } from '../shared/model/entrie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categorie: string | undefined;
  public allAPI: Array<IEntrie> = [];
  public isLoading = false;
  public searchedTerm = '';
  public focus = false;
  public page = 1;
  public pageSize = 28;
  constructor(private categoriesService: CategoriesService, private entriesService: EntriesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.categoriesService
      .getAll()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (categorie: string) => (this.categorie = categorie),
        err => (this.categorie = 'Unavailable')
      );
    this.getAllAPi();
  }

  public focusOn() {
    this.focus = true;
  }

  public focusOut() {
    this.focus = false;
  }

  public pageChange(e: any) {
    this.page = e;
  }

  public clean() {
    this.searchedTerm = '';
    this.page = 1;
    this.focus = false;
  }

  private getAllAPi() {
    this.entriesService
      .getAll()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((z: any) => (this.allAPI = z.entries));
  }
}
