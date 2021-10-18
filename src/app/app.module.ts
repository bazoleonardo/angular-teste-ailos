import { MainModule } from './main/main.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { faSquare as farSquare, faCheckSquare as farCheckSquare, faStar as farStar, faBell as farBell, faCreditCard as farCreditCard, faUser as fasUser, faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faSquare, faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheckSquare, farSquare, farCheckSquare, farStar, farBell, farCreditCard, fasUser, farCheckCircle);
  }
}
