import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../shared/services/entries.service';
import { finalize } from 'rxjs/operators';
import { IEntrie } from '../shared/model/entrie';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  public allAPI: Array<IEntrie> = [];
  public isLoading = true;

  constructor(private entriesService: EntriesService) {}

  ngOnInit() {
    this.getAllAPi();
  }

  private getAllAPi() {
    this.entriesService
      .getAll()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((z: any) => (this.allAPI = z.entries));
  }
}
