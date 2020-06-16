import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesService } from './entries.service';
import { RamdomService } from './ramdom.service';

@NgModule({
  imports: [CommonModule]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [EntriesService, RamdomService, EntriesService]
    };
  }
}
