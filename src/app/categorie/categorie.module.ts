import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, CategorieRoutingModule, SharedModule]
})
export class CategorieModule {}
