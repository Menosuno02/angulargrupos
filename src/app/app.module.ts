import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceGrupos } from './services/service.grupos';
import { FormsModule } from '@angular/forms';
import { CreatealumnoComponent } from './components/createalumno/createalumno.component';
import { appRoutingProvider, routing } from './app.routing';

@NgModule({
  declarations: [AppComponent, GruposComponent, CreatealumnoComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, routing],
  providers: [ServiceGrupos, appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
