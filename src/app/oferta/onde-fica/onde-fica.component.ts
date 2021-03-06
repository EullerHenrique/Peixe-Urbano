import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../oferta.service';



@Component({
  selector: "app-onde-fica",
  templateUrl: "./onde-fica.component.html",
  styleUrls: ["./onde-fica.component.css"],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public onde_fica: string = '.';

  constructor(public route: ActivatedRoute, public ofertasService: 
  OfertasService) {  }

  ngOnInit() {
      this.route.parent.params.subscribe((parametros: Params) => {

      this.ofertasService.getOndeFicaOfertaPorId(parametros.id)
      .then( (onde_fica: string) => {
          this.onde_fica= onde_fica;
      });

    })

  }
}
