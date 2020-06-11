import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevisionjourPage } from './revisionjour.page';

const routes: Routes = [
  {
    path: '',
    component: RevisionjourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionjourPageRoutingModule {}
