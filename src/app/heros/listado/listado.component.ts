import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Iroman',
    'Hulk',
    'Thor'
  ];

  heroBorrado: string = '';

  borrarHero() {
    this.heroBorrado = this.heroes.shift() || '';
  }
}
