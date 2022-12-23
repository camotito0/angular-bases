import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [ // se declaran componentes
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule // se importan modulos
  ],
  providers: [], // servicios de modulos
  bootstrap: [AppComponent] // app principal
})
export class AppModule { }
