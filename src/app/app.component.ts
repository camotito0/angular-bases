import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // name of the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Count app';
  numero: number = 10;
  base  :number = 5;

  acumular(value:number) {
    this.numero +=value
  }
}
