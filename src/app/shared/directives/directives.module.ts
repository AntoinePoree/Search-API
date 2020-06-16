import { NgModule } from '@angular/core';
import { YesNoDirective } from './yes-no.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [YesNoDirective],
  declarations: [YesNoDirective],
  imports: [CommonModule]
})
export class DirectiveModule {}
