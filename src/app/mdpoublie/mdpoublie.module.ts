import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdpoubliePageRoutingModule } from './mdpoublie-routing.module';

import { MdpoubliePage } from './mdpoublie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdpoubliePageRoutingModule
  ],
  declarations: [MdpoubliePage]
})
export class MdpoubliePageModule {}
