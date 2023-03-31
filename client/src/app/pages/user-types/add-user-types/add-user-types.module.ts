import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserTypesPageRoutingModule } from './add-user-types-routing.module';

import { AddUserTypesPage } from './add-user-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserTypesPageRoutingModule
  ],
  declarations: [AddUserTypesPage]
})
export class AddUserTypesPageModule {}
