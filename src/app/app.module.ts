import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPjComponent } from './cadastro-pj/cadastro-pj.component';
import { CadastroPfComponent } from './cadastro-pf/cadastro-pf.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {routing} from "./app.routing";
import { DetalharPfComponent } from './detalhar-pf/detalhar-pf.component';
import { DetalharPjComponent } from './detalhar-pj/detalhar-pj.component';
import {CadastroPfModule} from "./cadastro-pf/cadastro-pf.module";

@NgModule({
  declarations: [
    AppComponent,
    CadastroPjComponent,
    HomeComponent,
    LoginComponent,
    DetalharPfComponent,
    DetalharPjComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CadastroPfModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
