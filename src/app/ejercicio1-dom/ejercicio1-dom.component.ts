import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio1-dom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="card">
      <h2>Ejercicio 1 — Manipulación del DOM</h2>
      <div class="row">
        <input [(ngModel)]="nuevo" placeholder="Escribe algo..." />
        <button (click)="agregar()">Agregar</button>
        <button (click)="eliminar()" class="danger">Eliminar todo</button>
      </div>

      <ul class="lista">
        <li *ngFor="let item of lista; let i = index">
          <span>{{ i + 1 }}.</span> {{ item }}
        </li>
      </ul>
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
        margin-bottom: 1rem;
      }

      input {
        flex: 1;
        padding: 0.8rem;
        border-radius: 8px;
        border: 1px solid #cbd5e1;
        outline: none;
        transition: border 0.2s;
      }
      input:focus {
        border-color: #2563eb;
      }

      button {
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 0.6rem 1rem;
        cursor: pointer;
        transition: background 0.2s;
      }
      button:hover {
        background: #1d4ed8;
      }

      .danger {
        background: #ef4444;
      }
      .danger:hover {
        background: #dc2626;
      }

      .lista {
        margin-top: 1rem;
        padding-left: 1rem;
      }
      .lista li {
        margin-bottom: 0.4rem;
        padding: 0.4rem 0.6rem;
        background: white;
        border-radius: 6px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      }
    `,
  ],
})
export class Ejercicio1DomComponent {
  nuevo = '';
  lista: string[] = [];

  agregar() {
    const v = this.nuevo.trim();
    if (!v) return;
    this.lista.push(v);
    this.nuevo = '';
  }

  eliminar() {
    this.lista = [];
  }
}
