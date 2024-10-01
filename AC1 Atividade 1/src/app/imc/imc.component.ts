import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.css'
})
export class ImcComponent {
  public classificacao : string = "";
  public imc : number = 0;
  public peso : number = 0;
  public altura : number = 0;

  public calcularImc() {
    this.imc = this.peso / (this.altura**2);

    if (this.imc < 18.5) {
      this.classificacao = "Abaixo do peso";
    } else if (this.imc < 25) {
      this.classificacao = "Peso normal";
    } else if (this.imc < 30) {
      this.classificacao = "Sobrepeso";
    } else if (this.imc < 35) {
      this.classificacao = "Obesidade grau I";
    } else if (this.imc < 40) {
      this.classificacao = "Obesidade grau II";
    } else {
      this.classificacao = "Obesidade grau III";
    }
  }
}