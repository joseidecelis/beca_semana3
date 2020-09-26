import { Params, Router } from '@angular/router';
import { PersonaService } from './../service/persona.service';
import { Persona } from './../dto/persona';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  persona: Persona = new Persona();
  id: number;

  constructor(private perService: PersonaService,
              private route: Router,
              private activeR: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activeR.queryParams
      .subscribe(
        params => {
          this.id = params.id;
          if (params.id != null && params.id != undefined  ){
            this.perService.findById(this.id).subscribe(
              (resp) => {
                this.persona = resp;
              }, (error) => {
              }
            )
          }else{
            this.persona = new Persona();
          }
        }
      )
  }

  guardarPersona(): void {
    this.perService.guardar(this.persona).subscribe(
      (resp) => {
        alert('Guardado correctamente');
        this.route.navigate(['lista']);
      }, (error) => {
        console.log(error);
      }
    );
  }

}
