import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calcular-media',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.css'
})

export class CalcularMediaComponent {
  public notaFinal : number = 0;
  public notaAC1 : number = 0;
  public notaAC2 : number = 0;
  public notaAG : number = 0;
  public notaAF : number = 0;
  public status : string = "DESCONHECIDO"

  public calcularMedia() {
    this.notaFinal = (
      (this.notaAC1 * 0.15)
      + (this.notaAC2 * 0.30)
      + (this.notaAG * 0.10)
      + (this.notaAF * 0.45)
    )

    this.status = this.notaFinal >= 5 ? "APROVADO" : "REPROVADO" 
  }
}
