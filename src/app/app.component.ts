import { Component, OnInit } from '@angular/core';
import {  TvmazeService } from 'tvmaze';
import { Observable } from 'rxjs';
@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  show$: Observable<any>
  
  cardData: any=[];

 constructor(private tvmaze:TvmazeService){}

 ngOnInit(){
    this.tvmaze.getShow(336).subscribe(data =>{
    this.cardData.push(data);
    console.log(this.cardData)
  })
 }
}
