import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre:'',
    poder:0
  };

  @Output() onNewCharacter = new EventEmitter<Personaje>();

  agregar() {
    if(this.nuevo.nombre.trim().length === 0) {return;}
    this.onNewCharacter.emit(this.nuevo) // lo acepta porque nuevo es del tipo personaje
    // si emitiera otro valor que no sea de tipo personaje no lo aceptaria
    console.log(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
