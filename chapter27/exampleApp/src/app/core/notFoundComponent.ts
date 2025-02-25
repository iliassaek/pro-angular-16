import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'paNotFound',
  template: ` <h3 class="bg-danger text-white p-2">
      Sorry, something went wrong
    </h3>
    <button class="btn btn-primary" routerLink="/">Start Over</button>`,
})
export class NotFoundComponent {}
