import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastroPfComponent} from "./cadastro-pf.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    CadastroPfComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CadastroPfModule { }
