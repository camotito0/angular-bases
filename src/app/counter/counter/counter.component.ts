import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="acumular(base)" > + {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base)" > - {{base}}</button>
  `
})

export class CounterComponent {
  title : string = 'Count app';
  numero: number = 10;
  base  :number = 5;

  acumular(value:number) {
    this.numero +=value
  }
}
