import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apolice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.css'
})
export class ApoliceComponent {
  public valorFinal : number = 0;
  public valorApolice : number = 0;
  public nome : string = "";
  public sexo : string = "";
  public idade : number = 0;
  public valorAutomovel : number = 0;

  public calcularApolice() {
    if (this.sexo == "Feminino") {
        this.valorApolice = 0.08;
    } else if (this.idade <= 25) {
       this.valorApolice = 0.15;
    } else {
      this.valorApolice = 0.10;
    }

    this.valorFinal = this.valorAutomovel * this.valorApolice;
  }
}
