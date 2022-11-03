import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
 
         
})




export class LoginpageComponent implements OnInit {
logindata:any;

  formData(){
    
    let data={id:1,username:"madhan",password:"789456"};
    localStorage.setItem("logindata",JSON.stringify(data))
  }
  LoadData(){
    let data:any=localStorage.getItem('logindata');
    this.logindata=JSON.parse(data);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
