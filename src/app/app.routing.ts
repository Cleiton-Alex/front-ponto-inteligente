import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {CadastroPjComponent} from "./cadastro-pj/cadastro-pj.component";
import {CadastroPfComponent} from "./cadastro-pf/cadastro-pf.component";
import {ModuleWithProviders} from "@angular/core";
import {DetalharPjComponent} from "./detalhar-pj/detalhar-pj.component";

const APP_ROUTES: Routes = [
  {path: 'cadastrar-pessoa-fisica', component: CadastroPfComponent},
  {path: 'cadastrar-empresa', component: CadastroPjComponent},
  {path: 'empresa/:id', component: DetalharPjComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
