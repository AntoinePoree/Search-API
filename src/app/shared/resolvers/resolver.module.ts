import { NgModule } from '@angular/core';
import { CategorieResolver } from './categorie.resolve';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [CategorieResolver],
  imports: [CommonModule]
})
export class ResolverModule {}
