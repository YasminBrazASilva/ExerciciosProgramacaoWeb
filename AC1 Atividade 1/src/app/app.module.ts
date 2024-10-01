import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';

// Importando os componentes standalone
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ImcComponent } from './imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CalcularMediaComponent,
    CalculadoraComponent,
    ApoliceComponent,
    ConversorTemperaturaComponent,
    ImcComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
