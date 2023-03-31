import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserTypesPage } from './add-user-types.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserTypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserTypesPageRoutingModule {}
