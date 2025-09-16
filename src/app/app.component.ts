import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio1DomComponent } from './ejercicio1-dom/ejercicio1-dom.component';
import { Ejercicio2CalculadoraComponent } from './ejercicio2-calculadora/ejercicio2-calculadora.component';
import { Ejercicio3TituloComponent } from './ejercicio3-titulo/ejercicio3-titulo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    Ejercicio1DomComponent,
    Ejercicio2CalculadoraComponent,
    Ejercicio3TituloComponent,
  ],
  template: `
    <div class="app">
      <header class="topbar">
        <button class="burger" (click)="toggleMenu()">☰</button>
        <h1>Ejercicios — Clase de Desarrollo de Apps</h1>
      </header>

      <nav *ngIf="menuAbierto" class="menu">
        <ul>
          <li (click)="seleccionar(1)">1 — DOM</li>
          <li (click)="seleccionar(2)">2 — Calculadora</li>
          <li (click)="seleccionar(3)">3 — Títulos</li>
        </ul>
      </nav>

      <main class="main">
        <app-ejercicio1-dom *ngIf="opcion === 1"></app-ejercicio1-dom>
        <app-ejercicio2-calculadora
          *ngIf="opcion === 2"
        ></app-ejercicio2-calculadora>
        <app-ejercicio3-titulo *ngIf="opcion === 3"></app-ejercicio3-titulo>
        <div *ngIf="opcion === null" class="hint">
          Abre el menú y elige un ejercicio. 😉
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      .topbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        background: #1e293b;
        color: white;
      }

      .topbar h1 {
        font-size: 1.1rem;
        font-weight: 500;
      }

      .burger {
        background: #334155;
        color: white;
        border: none;
        padding: 0.5rem 0.8rem;
        font-size: 1.2rem;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.2s;
      }
      .burger:hover {
        background: #475569;
      }

      .menu {
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
      }
      .menu ul {
        display: flex;
        justify-content: space-around;
        padding: 0.8rem 0;
      }
      .menu li {
        list-style: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 8px;
        transition: background 0.2s;
        font-weight: 500;
      }
      .menu li:hover {
        background: #e2e8f0;
      }

      .main {
        padding: 2rem;
      }

      .hint {
        text-align: center;
        color: #64748b;
        font-style: italic;
      }
    `,
  ],
})
export class AppComponent {
  menuAbierto = false;
  opcion: number | null = null;

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
  seleccionar(n: number) {
    this.opcion = n;
    this.menuAbierto = false;
  }
}
