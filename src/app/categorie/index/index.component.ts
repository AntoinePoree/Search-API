import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEntrie } from '../../shared/model/entrie';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public allEntries: Array<IEntrie> = [];
  public title: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.allEntries = [];
    this.route.queryParams.subscribe(data => (this.title = data.categorie));

    this.route.data.subscribe(data => {
      this.allEntries = data.entries.entries;
      console.log(this.allEntries);
    });
  }
}
