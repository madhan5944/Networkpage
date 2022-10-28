import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import{Router,UrlSerializer} from '@angular/router';
type details = Array<{ id: number; name: string }>;
@Component({
  selector: 'app-persondetailss-view',
  templateUrl: './persondetailss-view.component.html',
  styleUrls: ['./persondetailss-view.component.css']
})
export class PersondetailssViewComponent implements OnInit {



constructor(private router: Router,private route: ActivatedRoute) { };
id:any;
getid:any;
@Input () receiver:any;
  ngOnInit(): void {
     this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('id')!==null){
        this.id=params.get('id');
        console.log(typeof this.id)
      }
      
    });
    this.getid=this.users.find((user)=>user.userid === +this.id)  
  }
 public users:{userid:any; image:string;name:string;place:string;}[]=[    {
      userid: 1,
      image: "/assets/images/arun 1.png",
      name: 'Madhan',
      place: 'chennai',
    },
    {
      userid: 2,
      image: '/assets/images/arun 2.png',
      name: 'ArunKumar',
      place: 'chennai',
    },
    {
      userid: 3,
      image: '/assets/images/arun 1.png',
      name: 'Abin',
      place: 'chennai',
    },
    { userid:4,
      image: '/assets/images/arun 2.png',
      name: 'Siva',
      place: 'chennai',
    },
    {userid:5,
      image: '/assets/images/arun 1.png',
      name: 'Tazeen',
      place: 'chennai',
    },
    {userid:6,
      image: '/assets/images/arun 2.png',
      name: 'Harish',
      place: 'chennai',
    },
    {userid:7,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:8,
      image: '/assets/images/arun 2.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:9,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:10,
      image: '/assets/images/arun 2.png',
      name: 'Madhan',
      place: 'chennai',
    },
   
    {userid:11,
      image: '/assets/images/arun 2.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:12,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:13,
      image: '/assets/images/arun 2.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:14,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      place: 'chennai',
    },
    {userid:15,
      image: '/assets/images/arun 2.png',
      name: 'Madhan',
      place: 'chennai',
    },
     {userid:16,
      image: '/assets/images/arun 1.png',
      name: 'Madhan',
      place: 'chennai',
    },
  ];

}
