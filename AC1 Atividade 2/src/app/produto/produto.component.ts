import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  listaProdutos: any[] = [
    { nome: 'Camiseta', preco: 499.99, descricao: 'Camiseta branca lisa da Vovó Maria', disponivel: true },
    { nome: 'Calça', preco: 99.99, descricao: 'Calça cargo cinza escura da Gucci', disponivel: true },
    { nome: 'Boné', preco: 19.99, descricao: 'Boné branco de aba azul da FACENS', disponivel: false },
    { nome: 'Saia', preco: 29.99, descricao: 'Saia rosa da Louis Vitton', disponivel: true }
  ];

  produtosDisponiveis: boolean = false;
  constructor() {
    this.produtosDisponiveis = this.listaProdutos.some(produto => produto.disponivel);
  }
}
