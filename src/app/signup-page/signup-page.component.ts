import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
    signuppage!: FormGroup; 
  constructor(private router: Router) {}

  ngOnInit(): void { 
    this.signuppage = new FormGroup({
      'mail' : new FormControl(null),
      'username' : new FormControl(null),
           'password' : new FormControl(null),
    });
}
  
 onSubmit(){
 localStorage.setItem('User', JSON.stringify(this.signuppage.value));



 }

}
// formData(){

  
//   let email=document.getElementById('email')
//   let username=document.getElementById('username')
//   let password=document.getElementById('password')


//   localStorage.setItem('userEmail',email);
//   localStorage.setItem('username',username);
//   localStorage.setItem('userpassword',password);
// }
//   constructor() { }

//   ngOnInit(): void {
//   }

// }