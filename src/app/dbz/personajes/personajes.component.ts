import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //@Input() personajes: Personaje[] = [];

  
  get personajes() {
    return this.dvzService.personajes
  }
  
  constructor(private dvzService: DbzService) {}
}
