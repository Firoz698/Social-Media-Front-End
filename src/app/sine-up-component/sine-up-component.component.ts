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

  oPractice = new Practice();


  @ViewChild(PracticeOneComponent) PracticeCompo! : PracticeOneComponent ;
  constructor(private MyService:ExprementApiService,private router: Router){}



  PostData(){
    debugger
    this.MyService.PostReduest(this.oPractice).subscribe(
      (res)=>{
        this.router.navigate(["/"])
        console.log(res);
      }
    )
  }









}
