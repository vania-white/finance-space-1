import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'accounts',
    loadChildren: () => import('./pages/accounts/accounts.module')
      .then(module => module.AccountsModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module')
      .then(module => module.CategoriesModule)
  },
  {
    path: 'operations',
    loadChildren: () => import('./pages/operations/operations.module')
      .then(module => module.OperationsModule)
  },
  {
    path: 'statistics',
    loadChildren: () => import('./pages/statistics/statistics.module')
      .then(module => module.StatisticsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
