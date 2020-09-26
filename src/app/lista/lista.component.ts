import { Component, OnInit } from '@angular/core';
import { Persona } from '../dto/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private perService: PersonaService) { }

  personas: Persona[];

  ngOnInit(): void {

    this.perService.getAll().subscribe(
      (resp) => {
        this.personas = resp;
      }, (error) => {
        console.log(error);
      }
    );
  }
}
