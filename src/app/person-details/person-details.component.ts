import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
 
  users:any =[
    { 
      id:1,
      fullName:'Madhan',
      
  
    },
    
   
   
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
