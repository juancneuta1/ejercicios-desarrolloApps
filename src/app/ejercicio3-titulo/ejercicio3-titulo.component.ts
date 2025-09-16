import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3-titulo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="card">
      <h2>Ejercicio 3 — Cambio de título</h2>
      <h3 class="titulo">{{ titulo }}</h3>
      <input
        [(ngModel)]="titulo"
        placeholder="Escribe un nuevo título (se actualiza al instante)"
      />
      <p class="small">Tip: Se cambia el titulo en tiempo real</p>
    </section>
  `,
  styles: [
    `
      .card {
        background: #f9fafb;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        text-align: center;
      }

      .titulo {
        color: #2563eb;
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }

      input {
        width: 100%;
        padding: 0.6rem;
        border-radius: 8px;
        border: 1px solid #cbd5e1;
        outline: none;
        transition: border 0.2s;
      }
      input:focus {
        border-color: #2563eb;
      }

      .small {
        font-size: 0.85rem;
        color: #64748b;
        margin-top: 0.6rem;
      }
    `,
  ],
})
export class Ejercicio3TituloComponent {
  titulo = '';
}
