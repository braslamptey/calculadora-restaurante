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
  valorConta: any = null; // Iniciado como null para o placeholder aparecer
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
    const valor = parseFloat(this.valorConta);
    
    if (valor > 0) {
      this.gorjetaTotal = valor * (this.porcentagem / 100);
      this.totalGeral = valor + this.gorjetaTotal;
      this.totalPorPessoa = this.totalGeral / this.numPessoas;
    } else {
      this.gorjetaTotal = 0;
      this.totalGeral = 0;
      this.totalPorPessoa = 0;
    }
  }

  incrementarPessoas() {
    this.numPessoas++;
    this.calcular();
  }

  decrementarPessoas() {
    if (this.numPessoas > 1) {
      this.numPessoas--;
      this.calcular();
    }
  }
}