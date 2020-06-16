import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieResolver } from '../shared/resolvers/categorie.resolve';
import { IndexComponent } from './index/index.component';
import { Shell } from '../shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    // {
    //   path: '',
    //   component: IndexComponent
    // },
    {
      path: 'categorie',
      resolve: {
        entries: CategorieResolver
      },
      component: IndexComponent
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule {}
