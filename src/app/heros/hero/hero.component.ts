import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  name: string = 'Ironman'; // atributo/propiedad
  edad: number = 45;

  get nameCapitalizado():string {
    return this.name.toUpperCase();
  }

  getName():string {
    return `${this.name} - ${this.edad}`
  }

  cambiar():void {
    this.name = 'Spiderman';
  }

  cambiarEdad():void {
    this.edad = 30;
  }

}
