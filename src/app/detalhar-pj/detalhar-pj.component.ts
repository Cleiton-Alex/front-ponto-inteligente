import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detalhar-pj',
  templateUrl: './detalhar-pj.component.html',
  styleUrls: ['./detalhar-pj.component.css']
})
export class DetalharPjComponent implements OnInit {

  id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route);
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
