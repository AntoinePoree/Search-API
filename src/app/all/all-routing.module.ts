import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { AllComponent } from './all.component';

const routes: Routes = [Shell.childRoutes([{ path: 'all', component: AllComponent, data: { title: extract('All') } }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AllRoutingModule {}
