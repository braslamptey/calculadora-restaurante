import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class HomePage {
  valorConta: number = null as any;
  porcentagem: number = 10;
  numPessoas: number = 1;

  gorjetaTotal: number = 0;
  totalGeral: number = 0;
  totalPorPessoa: number = 0;

  constructor() {}

  setPorcentagem(valor: number) {
    this.porcentagem = valor;
    this.calcular();
  }

  calcular() {
    // Garantir que valorConta seja um número válido
    let valor = this.valorConta;
    
    if (valor === null || valor === undefined || isNaN(valor)) {
      valor = 0;
    }
    
    // Converter para número se for string
    if (typeof valor === 'string') {
      valor = parseFloat(valor);
      if (isNaN(valor)) valor = 0;
    }
    
    if (valor > 0) {
      this.gorjetaTotal = valor * (this.porcentagem / 100);
      this.totalGeral = valor + this.gorjetaTotal;
      
      const pessoas = this.numPessoas > 0 ? this.numPessoas : 1;
      this.totalPorPessoa = this.totalGeral / pessoas;
    } else {
      this.gorjetaTotal = 0;
      this.totalGeral = 0;
      this.totalPorPessoa = 0;
    }
  }

  incrementarPessoas() {
    if (this.numPessoas < 99) {
      this.numPessoas++;
      this.calcular();
    }
  }

  decrementarPessoas() {
    if (this.numPessoas > 1) {
      this.numPessoas--;
      this.calcular();
    }
  }
}