import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ServicesModule } from './services/services.module';
import { ComponentModule } from './component/component.module';
import { ResolverModule } from './resolvers/resolver.module';
import { DirectiveModule } from './directives/directives.module';

@NgModule({
  imports: [CommonModule, ServicesModule, ComponentModule, ResolverModule, DirectiveModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, ServicesModule, ComponentModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
