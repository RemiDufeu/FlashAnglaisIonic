import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LexiquePage } from './lexique.page';

const routes: Routes = [
  {
    path: '',
    component: LexiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LexiquePageRoutingModule {}
