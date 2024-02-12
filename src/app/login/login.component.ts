import { Component, OnInit } from '@angular/core';
import { Practice } from '../practice-one/PracticeClass';
import { ExprementApiService } from '../exprement-api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

oPractce = new Practice();
type:string="password";
IsText:boolean=false;
eyeIcom:string="fa-eye-slash";
loginFrom!: FormGroup;

constructor(private Services: ExprementApiService,private router:Router ,private fb:FormBuilder){}
  ngOnInit() {
    this.loginFrom= this.fb.group({
      Username:['',Validators.required],
      password:['',Validators.required]
    });
    
  }


  hideShow(){
    this.IsText = !this.IsText;
    this.IsText? this.eyeIcom= "fa fa-eye" : this.eyeIcom ="fa fa-eye-slash";
    this.IsText? this.type = "text" : this.type="password";
  }

  onSubmitLogin(){
    if(this.loginFrom.valid){
      console.log(this.loginFrom.value);
    }else{
      alert("Invalid from");
    }
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
