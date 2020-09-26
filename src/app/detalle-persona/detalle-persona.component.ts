import { ActivatedRoute, Params, Router } from '@angular/router';
import { Persona } from './../dto/persona';
import { PersonaService } from './../service/persona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.scss']
})
export class DetallePersonaComponent implements OnInit {
  persona: Persona;
  id: number;
  constructor(private perService: PersonaService,
              private activeR: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.activeR.params.subscribe(
      (params: Params) => {
      this.perService.findById(params.id).subscribe(
      (res) => {
        this.persona = res;
      }, (error) => {
        console.log(error);
      });
    });
  }
}
