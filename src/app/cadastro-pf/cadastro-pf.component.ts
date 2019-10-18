import {Component, OnInit} from '@angular/core';
import {CadastroPfService} from "./cadastro-pf.service";

@Component({
  selector: 'app-cadastro-pf',
  templateUrl: './cadastro-pf.component.html',
  styleUrls: ['./cadastro-pf.component.css']
})
export class CadastroPfComponent implements OnInit {

  constructor(private service: CadastroPfService) {
  }

  ngOnInit() {
    this.service.list().subscribe(console.log);
  }

  onSubmit(form) {
    console.log(form);
  }

}
