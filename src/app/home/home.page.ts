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
  valorConta: number = 0;
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
    if (this.valorConta > 0 && this.valorConta !== null && !isNaN(this.valorConta)) {
      this.gorjetaTotal = this.valorConta * (this.porcentagem / 100);
      this.totalGeral = Number(this.valorConta) + Number(this.gorjetaTotal);
      
      const pessoas = this.numPessoas > 0 ? this.numPessoas : 1;
      this.totalPorPessoa = this.totalGeral / pessoas;
    } else {
      this.gorjetaTotal = 0;
      this.totalGeral = 0;
      this.totalPorPessoa = 0;
    }
  }

  incrementarPessoas() {
    if (this.numPessoas < 100) {
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