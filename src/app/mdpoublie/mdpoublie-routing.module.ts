import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdpoubliePage } from './mdpoublie.page';

const routes: Routes = [
  {
    path: '',
    component: MdpoubliePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdpoubliePageRoutingModule {}
