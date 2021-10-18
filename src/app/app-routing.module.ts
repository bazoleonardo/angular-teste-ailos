import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'consultas',
    pathMatch: 'full'
  },
  {
    path:'admin',
    loadChildren: () => import('./main/main.module').then(module => module.MainModule),
    canActivate:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
