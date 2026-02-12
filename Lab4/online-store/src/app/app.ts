import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector:'app-user',
  template:
    '@for(a of username;track a){<p>Username {{a}}<p>}',
})
export class User {
  username = ['Ivan','Vanya','Amongasik']
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

@Component({
  selector: 'app-login',
  template: '@if(isLoggedIn){' +
    '<span>Yes, server is running</span>' +
    '}'
})
export class Login {
  isLoggedIn = true;
}
