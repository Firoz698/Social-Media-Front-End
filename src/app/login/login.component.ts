import { Component, OnInit } from '@angular/core';
import { Practice } from '../practice-one/PracticeClass';
import { ExprementApiService } from '../exprement-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

oPractce = new Practice();

constructor(private Services: ExprementApiService,private router:Router){}
  ngOnInit() {
    
  }


  LoginMethod(){
    const Payload = {
      email:this.oPractce.email,
      password: this.oPractce.password
    }
    this.Services.LoginUser(Payload).subscribe(
      (res)=>{
        if(res != null){
          this.router.navigate(["/Contact/"+res.id]);
        }

      }
    )
  }






}
