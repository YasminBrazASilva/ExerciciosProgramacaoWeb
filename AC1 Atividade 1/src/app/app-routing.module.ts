import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { ApoliceComponent } from './apolice/apolice.component';
import { ConversorTemperaturaComponent } from './conversor-temperatura/conversor-temperatura.component';
import { ImcComponent } from './imc/imc.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'calcularMedia', component: CalcularMediaComponent},
  { path: 'calculadora', component: CalculadoraComponent},
  { path: 'apolice', component: ApoliceComponent},
  { path: 'conversorTemperatura', component: ConversorTemperaturaComponent},
  { path: 'imc', component: ImcComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
