import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
 
})
export class ProfilepageComponent implements OnInit {
   
 public users =[
  { 
    image:"/assets/images/arun 1.png",
    name:'Madhan',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Abin',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Arun',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 1.png",
    name:'Sivaram',
    place:'chennai',

  },
  { 
    image:"/assets/images/arun 2.png",
    name:'Sivaram',
    place:'chennai',

  },
 
  
];
  constructor() { }

  ngOnInit(): void {
  }
  showElements: boolean = false;
  showListElements: boolean=false;
  
}

  

