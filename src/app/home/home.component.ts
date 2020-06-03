import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categorie: string | undefined;
  isLoading = false;

  constructor(private categoriesService: CategoriesService) {}

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
        },
        err => (this.categorie = 'Unavailable')
      );
  }
}
