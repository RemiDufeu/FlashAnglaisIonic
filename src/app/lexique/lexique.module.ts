import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LexiquePageRoutingModule } from './lexique-routing.module';

import { LexiquePage } from './lexique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LexiquePageRoutingModule
  ],
  declarations: [LexiquePage]
})
export class LexiquePageModule {}
