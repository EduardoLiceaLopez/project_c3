import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTypesPageRoutingModule } from './user-types-routing.module';

import { UserTypesPage } from './user-types.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserTypesPageRoutingModule
  ],
  declarations: [UserTypesPage]
})
export class UserTypesPageModule {}
