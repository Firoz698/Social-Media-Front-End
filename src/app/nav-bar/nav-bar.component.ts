import { Component, OnInit } from '@angular/core';
import { ExprementApiService } from '../exprement-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private server:ExprementApiService){}
  
  
  ngOnInit() {
    
  }



}
