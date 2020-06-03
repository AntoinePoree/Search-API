import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [CommonModule, ServicesModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, ServicesModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
