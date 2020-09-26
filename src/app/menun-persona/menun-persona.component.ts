import { PersonaService } from './../service/persona.service';
import { Persona } from './../dto/persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menun-persona',
  templateUrl: './menun-persona.component.html',
  styleUrls: ['./menun-persona.component.scss']
})
export class MenunPersonaComponent implements OnInit {

  personas: Persona[];
  constructor(private perService: PersonaService) { }

  ngOnInit(): void {

    this.perService.getAll().subscribe((res) => {
      this.personas = res;
    }, (error) => {
        console.log(error);
      }
    );
  }

}
