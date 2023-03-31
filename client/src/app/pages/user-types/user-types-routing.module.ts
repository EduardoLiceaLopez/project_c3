import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTypesPage } from './user-types.page';

const routes: Routes = [
  {
    path: '',
    component: UserTypesPage
  },
  {
    path: 'add-user-types',
    loadChildren: () => import('./add-user-types/add-user-types.module').then( m => m.AddUserTypesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTypesPageRoutingModule {}
