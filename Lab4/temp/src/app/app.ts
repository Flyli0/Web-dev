import { Component, signal , output, Injectable} from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {FormsModule,ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';


@Component({
  selector:'app-user',
  template:
    ' @defer(on viewport){'+
     '@for(a of username;track a){<p>Username {{a}}<p>}' +
    '<p>Favorite framework: {{myForm.value.userFramework | uppercase}}</p>}' +
    '@placeholder{' +
    '<p>future</p>}' +
    '@loading(minimum 2s){' +
    '<p>Loading...</p>}' +
    '<nav>\n' +
    '      <a routerLink="/">Home</a>\n' +
    '      |\n' +
    '    </nav>' +
    '<label for = "form">My first angular form</label>' +
    '<form [formGroup]="myForm" (ngSubmit)="handleSubmit()">' +
    '<input type = "text" id = "form" placeholder = "Insert favorit framework" formControlName = "userFramework"\>' +
    '<button type = "submit" [disabled] = "!myForm.valid">Submint</button>' +
    '</form>',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, UpperCasePipe],
})
export class User {
  username = ['Ivan','Vanya','Amongasik']
  fav_framework = '';
  myForm = new FormGroup({
    userFramework: new FormControl('', Validators.required),
  });
  handleSubmit(){
    alert(this.myForm.value.userFramework);
  }
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

@Injectable({
  providedIn: 'root',
})
class UserService {
  //some dependency
}
