import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World';
  meanStackOption = ['Mongo DB', 'Express JS', 'Angular JS', 'Node JS']

  // onSubmit(f:NgForm) {
  //   console.log(f)
  //   console.log(f.value.email)
  // }
  @ViewChild('f') form: NgForm
  onSubmit() {
    console.log(this.form.value.email)
  }
}
