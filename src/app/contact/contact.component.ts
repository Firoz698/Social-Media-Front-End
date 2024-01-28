import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExprementApiService } from '../exprement-api.service';
import { Practice } from '../practice-one/PracticeClass';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  UserClass = new Practice();
  PostList:any[]=[];
  PostValue: string = "";
  //User Id
  id:number=-1;
  UserId:number=0;
  Title:string="";
  Description:string="";



  constructor(private activeRout: ActivatedRoute, private httpServices: ExprementApiService) { }
  ngOnInit() {
    this.activeRout.paramMap.subscribe((param) => {

      var id = param.get("id");
      if (id != null) {
        this.id = Number(id);
        this.GetUserInfo(Number(id));
        this.PostGetInfo(id);
      }
    });
  }
  GetUserInfo(id: number) {
    this.httpServices.GetUser(id).subscribe(
      (res) => {
        if (res != null) {
          this.UserClass = res;
        }
      }
    )
  }
  PostMethod(post: any) {
    console.log(post.value);
    this.PostValue = post.value;
    const Object = {
      id:0,
      UserId:this.id,
      Title:"Default Title",
      Description:post.value
    }
    this.httpServices.PostpostMethod(Object).subscribe(
      (res)=>{
        this.PostGetInfo(this.id);
      }
    );
  }
  PostGetInfo(id:any){
    debugger
    this.httpServices.PostGetMethod(id).subscribe(
      (res)=>{
        this.PostList=res;
        
      }
    );
  }
  PostDeleted(Objec:any){
    console.log(Objec.id)
    this.httpServices.DeletedP(Objec.id).subscribe(
      (res)=>{
        this.PostGetInfo(this.id);
      }
    );
  }

  EditMethod(Item:any){
    debugger
    document.getElementById('ModalOpenId')?.click();
    this.Description=Item.description;
  }

  UpdatePostMethod(){

  }






}
