import { Component, OnInit,Input } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
 
})
export class ProfilepageComponent implements OnInit {
showProfilePage:boolean=true;
showPersonDetailsView:boolean=false;
selectedReceiver:any;


  
 public users =[
  {
  image:"/assets/images/arun 1.png",
  name:"Madhan",
  place:"chennai",
  },
  {
    image:"/assets/images/arun 2.png",
    name:"ArunKumar",
    place:"chennai",
    },
    {
      image:"/assets/images/arun 1.png",
      name:"Abin",
      place:"chennai",
      },
      {
        image:"/assets/images/arun 2.png",
        name:"Siva",
        place:"chennai",
        },
        {
          image:"/assets/images/arun 1.png",
          name:"Tazeen",
          place:"chennai",
          },
          {
            image:"/assets/images/arun 2.png",
            name:"Harish",
            place:"chennai",
            },
            {
              image:"/assets/images/arun 1.png",
              name:"Madhan",
              place:"chennai",
              },
              {
                image:"/assets/images/arun 2.png",
                name:"Madhan",
                place:"chennai",
                },
                {
                  image:"/assets/images/arun 1.png",
                  name:"Madhan",
                  place:"chennai",
                  },
                  {
                    image:"/assets/images/arun 2.png",
                    name:"Madhan",
                    place:"chennai",
                    },
                    {
                      image:"/assets/images/arun 1.png",
                      name:"Madhan",
                      place:"chennai",
                      },
                      {
                        image:"/assets/images/arun 2.png",
                        name:"Madhan",
                        place:"chennai",
                        },
                        {
                          image:"/assets/images/arun 1.png",
                          name:"Madhan",
                          place:"chennai",
                          },
                          {
                            image:"/assets/images/arun 2.png",
                            name:"Madhan",
                            place:"chennai",
                            },
                            {
                              image:"/assets/images/arun 1.png",
                              name:"Madhan",
                              place:"chennai",
                              },
                              {
                                image:"/assets/images/arun 2.png",
                                name:"Madhan",
                                place:"chennai",
                                },
]
currentUser:any;
  constructor() { }

  ngOnInit(): void {
  }
  showElements: boolean = false;
  showListElements: boolean=false;
  selectCurrentUser(user:any){
    console.log("hi",user);
    this.currentUser=user;
    this.showProfilePage=false;
    this.showPersonDetailsView=true;
  }
 showElements1:boolean=false;
 showListElement1:boolean=false;
  
}

  

