import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  public resultado : number = 0;
  public numero1 : number = 0;
  public numero2 : number = 0;
  public operacao : string = "+";

  public definirOperacao(operacao : string) {
    this.operacao = operacao;
    this.calcular()
  }

  public calcular() {
    switch (this.operacao) {
      case "+":
        this.resultado = this.numero1 + this.numero2;
        break;
      case "-":
        this.resultado = this.numero1 - this.numero2;
        break;
      case "*":
        this.resultado = this.numero1 * this.numero2;
        break;
      case "/":
        this.resultado = this.numero1 / this.numero2;
        break;
      default:
        break;
    }
  }
}
