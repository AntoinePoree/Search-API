import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AllRoutingModule } from './all-routing.module';
import { AllComponent } from './all.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, TranslateModule, AllRoutingModule, SharedModule],
  declarations: [AllComponent]
})
export class AllModule {}
