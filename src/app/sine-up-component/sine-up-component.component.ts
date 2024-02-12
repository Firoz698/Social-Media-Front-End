import { Component, ViewChild } from '@angular/core';
import { Practice } from '../practice-one/PracticeClass';
import { PracticeOneComponent } from '../practice-one/practice-one.component';
import { ExprementApiService } from '../exprement-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sine-up-component',
  templateUrl: './sine-up-component.component.html',
  styleUrls: ['./sine-up-component.component.css']
})
export class SineUpComponentComponent {


  oPractce = new Practice();
  type:string="password";
  IsText:boolean=false;
  eyeIcom:string="fa-eye-slash";
  

  @ViewChild(PracticeOneComponent) PracticeCompo! : PracticeOneComponent ;
  constructor(private MyService:ExprementApiService,private router: Router){}


  
    hideShow(){
      this.IsText = !this.IsText;
      this.IsText? this.eyeIcom= "fa fa-eye" : this.eyeIcom ="fa fa-eye-slash";
      this.IsText? this.type = "text" : this.type="password";
    }
  











}
