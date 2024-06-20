import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ssr-page',
  standalone: true,
  template: `
    <div>
      <a href="https://analogjs.org/" target="_blank">
        <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
      </a>
    </div>

    <h2>Analog</h2>

    <h3>This is an SSR page probably</h3>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count() }}</button>
    </div>

    <p class="read-the-docs">
      For guides on how to customize this project, visit the
      <a href="https://analogjs.org" target="_blank">Analog documentation</a>
    </p>
  `,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class SsrPageComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
