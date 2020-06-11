import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'home', 
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'revisionjour',
    loadChildren: () => import('./revisionjour/revisionjour.module').then( m => m.RevisionjourPageModule)
  },
  {
    path: 'lexique',
    loadChildren: () => import('./lexique/lexique.module').then( m => m.LexiquePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'creercompte',
    loadChildren: () => import('./creercompte/creercompte.module').then( m => m.CreercomptePageModule)
  },
  {
    path: 'programme',
    loadChildren: () => import('./programme/programme.module').then( m => m.ProgrammePageModule)
  },
  {
    path: 'objectif',
    loadChildren: () => import('./objectif/objectif.module').then( m => m.ObjectifPageModule)
  },
  {
    path: 'mdpoublie',
    loadChildren: () => import('./mdpoublie/mdpoublie.module').then( m => m.MdpoubliePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
