import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() title: string;

  constructor() {}

  ngOnChanges() {}

  changeTitle(title: string) {
    let res = '';

    switch (title.toString()) {
      case 'Art & Design':
        res = 'Art';
        break;

      case 'Cloud Storage & File Sharing':
        res = 'Cloud';
        break;

      case 'Continuous Integration':
        res = 'CI';
        break;

      case 'Currency Exchange':
        res = 'exchange';
        break;

      case 'Data Validation':
        res = 'DataValidation';
        break;

      case 'Test Data':
      case 'Text Analysis':
      case 'Science & Math':
        res = 'test';
        break;

      case 'Open Data':
      case 'Open Source Projects':
        res = 'open';
        break;

      case 'Machine Learning':
        res = 'MachineLearning';
        break;

      case 'Sports & Fitness':
        res = 'Sports';
        break;

      case 'Documents & Productivity':
        res = 'DocumentsProductivity';
        break;

      case 'Games & Comics':
        res = 'games';
        break;

      case 'Food & Drink':
        res = 'FoodDrink';
        break;

      default:
        res = title;
        break;
    }
    return res;
  }
}
