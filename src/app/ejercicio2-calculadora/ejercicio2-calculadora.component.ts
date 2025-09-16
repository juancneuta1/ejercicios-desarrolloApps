import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio2-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="card">
      <h2>Ejercicio 2 — Calculadora</h2>
      <div class="row">
        <input type="number" [(ngModel)]="num1" placeholder="Número 1" />
        <input type="number" [(ngModel)]="num2" placeholder="Número 2" />
      </div>

      <div class="row">
        <button (click)="operar('+')">+</button>
        <button (click)="operar('-')">-</button>
        <button (click)="operar('*')">×</button>
        <button (click)="operar('/')">÷</button>
        <button (click)="limpiar()">Limpiar</button>
      </div>

      <p *ngIf="resultado !== null" class="resultado">
        Resultado: {{ resultado }}
      </p>
    </section>
  `,
  styles: [
    `
      .card {
        background: #f9fafb;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
      }

      .row {
        display: flex;
        gap: 0.5rem;
        margin-top: 1rem;
        flex-wrap: wrap;
      }

      input {
        flex: 1;
        min-width: 140px;
        padding: 0.6rem;
        border-radius: 8px;
        border: 1px solid #cbd5e1;
        outline: none;
        transition: border 0.2s;
      }
      input:focus {
        border-color: #2563eb;
      }

      button {
        flex: 1;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 0.6rem;
        cursor: pointer;
        transition: background 0.2s;
      }
      button:hover {
        background: #1d4ed8;
      }

      .resultado {
        margin-top: 1rem;
        font-weight: bold;
        font-size: 1.1rem;
        color: #0f172a;
      }
    `,
  ],
})
export class Ejercicio2CalculadoraComponent {
  num1 = 0;
  num2 = 0;
  resultado: number | null = null;

  operar(op: string) {
    switch (op) {
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
      case '-':
        this.resultado = this.num1 - this.num2;
        break;
      case '*':
        this.resultado = this.num1 * this.num2;
        break;
      case '/':
        this.resultado = this.num2 === 0 ? NaN : this.num1 / this.num2;
        break;
    }
  }

  limpiar() {
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = null;
  }
}
