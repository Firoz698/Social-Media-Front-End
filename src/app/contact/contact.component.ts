import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExprementApiService } from '../exprement-api.service';
import { Practice } from '../practice-one/PracticeClass';
import { FileTable } from '../Model/FileTable';
import { PostClass } from './Post';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  UserClass = new Practice();
  postClass = new PostClass();
  id: number = -1;
  public ListOfImage: PostClass[] = [];
  selectedFile: any;


  constructor(private activeRout: ActivatedRoute, private httpServices: ExprementApiService) { }
  ngOnInit() {
   
    this.activeRout.paramMap.subscribe((param) => {

      var id = param.get("id");
      if (id != null) {
        this.id = Number(id);
        this.postClass.UserId = Number(id);
        this.GetUserInfo(Number(id));
        this.GetPostData(id);
      }
    });
    this.ImageGetMethod();
  }
  //Image Upload Method about this Line
  ImageGetMethod() {
    debugger
    this.httpServices.UserGetData(this.postClass.UserId).subscribe(
      (res) => {
        debugger
        if (res != null) {
          this.ListOfImage = res;
        }
      }
    )
  }

  private COnvertByteArraytoUrl(byteArray: any): string {
    try {
      const base64String = btoa(String.fromCharCode(...byteArray));
      return `data:image/png;base64,${base64String}`;
    }
    catch (ex) {
      console.log(ex);
      return "";
    }
  }
  ImageUploadMethod(event: any) {
    if (event.target.files.length > 0) {
      debugger
      this.selectedFile = event.target.files[0];

    }
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

  
  //User Post Method Here Design
  PostMethod() {
    const formData = new FormData();
    this.postClass.Title=this.UserClass.name;
    formData.append('file', this.selectedFile);
    formData.append('object', JSON.stringify(this.postClass));
    this.httpServices.UserImagePost(formData).subscribe(
      (res) => {
        this.ImageGetMethod();
      }
    )
  }
  GetPostData(id: any) {

  }
  PostDeleted(Objec: any) {

  }

  EditMethod(Item: any) {

  }

  UpdatePostMethod() {

  }






}
