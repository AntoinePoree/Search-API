import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainsStringPipe } from './contains-string';

@NgModule({
  declarations: [ContainsStringPipe],
  exports: [ContainsStringPipe],
  imports: [CommonModule]
})
export class PipesModule {}
