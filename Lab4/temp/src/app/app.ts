import { Component, signal , output} from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector:'app-user',
  template:
    ' @defer (on viewport){'+
     '@for(a of username;track a){<p>Username {{a}}<p>}}' +
    '@placeholder{' +
    '<p>future</p>}' +
    '@loading(minimum 2s){' +
    '<p>Loading...</p>}',
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
  isEditable = true;
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

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class Appp {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}

import {input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class Userr {
  readonly name = input<string>();
}
@Component({
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Child {
  readonly addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}


