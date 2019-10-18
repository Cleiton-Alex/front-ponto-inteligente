import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Teste} from "./teste";

@Injectable({
  providedIn: 'root'
})
export class CadastroPfService {

  private readonly API = 'http://localhost:8080/api/empresas';

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get<Teste[]>(this.API + '/cnpj' + '/11861136000102');
  }

}
