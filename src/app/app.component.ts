import { Component } from '@angular/core';
export interface Information {
  name: String;
  email: String;
  password: String;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TemplateDrivenForm';

  information: Information = {
    name: '',
    email: '',
    password: ''
  }
  constructor() {
    this.information = {} as Information;
  }

  formSubmit(value: any) {
    console.log(value)
    console.log("Form Submited Successfully")
  }

}
