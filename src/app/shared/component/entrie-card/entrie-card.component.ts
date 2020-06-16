import { Component, OnInit, Input } from '@angular/core';
import { IEntrie } from '../../model/entrie';

@Component({
  selector: 'app-entrie-card',
  templateUrl: './entrie-card.component.html',
  styleUrls: ['./entrie-card.component.scss']
})
export class EntrieCardComponent implements OnInit {
  @Input() entrie: IEntrie;

  constructor() {}

  ngOnInit() {}
}
