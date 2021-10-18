import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { DadosCadastraisComponent } from './components/dados-cadastrais/dados-cadastrais.component';
import { ConsultaCpfComponent } from './components/consulta-cpf/consulta-cpf.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ConsultaCpfComponent,
    MainComponent,
    HeaderMainComponent,
    DadosCadastraisComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      closeButton: true,
      progressBar: true,
      enableHtml: true,
      timeOut: 3000,
      preventDuplicates: true,
      tapToDismiss: true,
      extendedTimeOut: 3000,
    })
  ],
  exports:[
    MainComponent,
    HeaderMainComponent,
    DadosCadastraisComponent,
    ConsultaCpfComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ]

})
export class MainModule { }
