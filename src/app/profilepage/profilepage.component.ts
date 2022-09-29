import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
 
})
export class ProfilepageComponent implements OnInit {

  
 public users:{name: string; place: string; image: string}[] =[
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
];
  constructor() { }

  ngOnInit(): void {
  }
  showElements: boolean = false;
  showListElements: boolean=false;
  
}

  

