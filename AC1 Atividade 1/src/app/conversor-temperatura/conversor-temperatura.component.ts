import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.css'
})

export class ConversorTemperaturaComponent {
  public temperaturaCelsius : number = 0;
  public temperaturaFahrenheit : number = 0;
  public temperaturaKelvin : number = 0;

  public converter() {
    this.temperaturaFahrenheit = (this.temperaturaCelsius * (9/5)) + 32
    this.temperaturaKelvin = this.temperaturaCelsius + 273.15
  }
}
