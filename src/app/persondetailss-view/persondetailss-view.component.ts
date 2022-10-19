import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-persondetailss-view',
  templateUrl: './persondetailss-view.component.html',
  styleUrls: ['./persondetailss-view.component.css']
})
export class PersondetailssViewComponent implements OnInit {
 @Input()receiver:any;
  

  
  constructor() { }

  ngOnInit(): void {
  }


}
