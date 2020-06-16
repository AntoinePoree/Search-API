import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CategoriesService } from '../shared/services/categories.service';
import { EntriesService } from '../shared/services/entries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categorie: string | undefined;
  isLoading = false;

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
        (categorie: string) => {
          this.categorie = categorie;

          this.entriesService
            .getByCategory(this.categorie[0])
            .pipe(
              finalize(() => {
                this.isLoading = false;
              })
            )
            .subscribe((z: string) => {
              console.log(z);
            });
        },
        err => (this.categorie = 'Unavailable')
      );
  }
}
