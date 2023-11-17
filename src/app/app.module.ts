import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceGrupos } from './services/service.grupos';

@NgModule({
  declarations: [AppComponent, GruposComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ServiceGrupos],
  bootstrap: [AppComponent],
})
export class AppModule {}
