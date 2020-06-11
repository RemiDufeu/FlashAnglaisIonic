import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevisionjourPageRoutingModule } from './revisionjour-routing.module';

import { RevisionjourPage } from './revisionjour.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevisionjourPageRoutingModule,
  ],
  declarations: [RevisionjourPage]
})
export class RevisionjourPageModule {}
