import { Component } from '@angular/core';
import { LetterComponent } from '../../../components/letter/letter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campanhas',
  standalone: true,
  imports: [LetterComponent, CommonModule],
  templateUrl: './campanhas.component.html',
  styleUrl: './campanhas.component.css'
})
export class CampanhasComponent {
  todasCampanhas = [
    {
      titulo: 'Internet 20Mbps Promo',
      data: 'Válida até 30/06/2023',
      descricao: 'Plano especial de verão com desconto',
    },
    {
      titulo: 'Black Friday Voz',
      data: 'Válida até 25/11/2022',
      descricao: '50% de desconto no primeiro ano',
    },
    {
      titulo: 'Aniversário Multitel',
      data: 'Válida até 15/08/2022',
      descricao: 'Ofertas especiais de aniversário',
    },
    {
      titulo: 'Pacote Empresarial',
      data: 'Válida até 31/05/2022',
      descricao: 'Soluções completas para empresas',
    },
    {
      titulo: 'Campanha Especial Natal',
      data: 'Válida até 25/12/2021',
      descricao: 'Bónus exclusivos de Natal',
    },
    {
      titulo: 'Promoção Dia da Mulher',
      data: 'Válida até 08/03/2021',
      descricao: 'Planos com brindes especiais',
    },
    {
      titulo: 'Campanha Fim de Ano',
      data: 'Válida até 31/12/2020',
      descricao: 'Última chance para aderir com desconto',
    },
    {
      titulo: 'Volta às Aulas',
      data: 'Válida até 15/02/2020',
      descricao: 'Internet para estudantes com super bónus',
    },
  ];

  paginaAtual = 1;
  campanhasPorPagina = 4;

  get campanhasPaginadas() {
    const start = 0;
    const end = this.paginaAtual * this.campanhasPorPagina;
    return this.todasCampanhas.slice(start, end);
  }

  get temMaisCampanhas() {
    return this.campanhasPaginadas.length < this.todasCampanhas.length;
  }

  carregarMais() {
    this.paginaAtual++;
  }
}
