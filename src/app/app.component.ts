import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'td-form';

  @ViewChild('signUp') signUp!: NgForm;

  mocArr = [
    { contactMode: "phone" },
    { contactMode: "email" },
    { contactMode: "fax" }
  ];

  userDetails = {
    UserName: 'iAmJhon',
    email: 'jhon@gmail.com',
     secretequestion:'Node',
    Answer:'My name is kiran',
    isSubscribed: true,
    modeofcontact: 'phone'
    
  };

  onSubmit() {
    if (this.signUp.invalid) {
      this.signUp.form.markAllAsTouched();
      return;
    }

    console.log(this.signUp.value);

    this.signUp.reset();
  }

  onEdit() {
    this.signUp.form.patchValue(this.userDetails);
  }
}