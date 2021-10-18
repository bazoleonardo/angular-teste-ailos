import { DadosCadastraisComponent } from './components/dados-cadastrais/dados-cadastrais.component';
import { ConsultaCpfComponent } from './components/consulta-cpf/consulta-cpf.component';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consultas',
    component:MainComponent,
    children:[
      {
        path: '',
        component: ConsultaCpfComponent
      },
      {
        path: 'info/:cpf',
        component: DadosCadastraisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
