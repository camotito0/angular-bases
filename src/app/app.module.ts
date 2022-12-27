import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HerosModule } from './heros/heros.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [ // se declaran componentes
    AppComponent,
  ],
  imports: [
    BrowserModule, // se importan modulos
    HerosModule,
    CounterModule,
    DbzModule
  ],
  providers: [], // servicios de modulos
  bootstrap: [AppComponent] // app principal
})
export class AppModule { }
