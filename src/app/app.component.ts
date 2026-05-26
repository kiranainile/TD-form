import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'TD-form';
  @ViewChild('signUp') signUp! :NgForm
email: any;
  

  onSubmit (){
    // if(this.signUp.invalid){
    //   return
    // }
    console.log(this.signUp.value)
    console.log(this.signUp)
  }
}
