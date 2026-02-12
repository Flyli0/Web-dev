import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector:'app-user',
  template: 'Username {{username}}',
})
export class User {
  username = "Young Tech"
}

@Component({
  selector: 'app-root',
  template: '<app-user/>',
  imports: [User],
  styles: `
    :host {
      color: blue;
    }
  `,
})
export class App {
  protected readonly title = signal('online-store');
  name = "Kirill";
}
