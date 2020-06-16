import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { EntrieCardComponent } from './entrie-card/entrie-card.component';
import { DirectiveModule } from '../directives/directives.module';

@NgModule({
  imports: [CommonModule, RouterModule, DirectiveModule],
  declarations: [CardComponent, EntrieCardComponent],
  exports: [CardComponent, EntrieCardComponent]
})
export class ComponentModule {}
