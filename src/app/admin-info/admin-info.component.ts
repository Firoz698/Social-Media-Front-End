import { Component, OnInit } from '@angular/core';
import { ExprementApiService } from '../exprement-api.service';
import { HttpClient } from '@angular/common/http';
import { FileTable } from '../Model/FileTable';

@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {

  ImageOne: any;
  public ListOfImage: FileTable[] = [];
  ImageStor:any[]=[];

  constructor(private services: ExprementApiService, private http: HttpClient) {}
  ngOnInit() {
    this.GetFileData();
  }

  GetFileData() {
    this.services.GetFileData().subscribe(
      (res) => {
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

  FielChangeMethod(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      this.services.ImagePost(formData).subscribe(
        (res) => {
          console.log(res)
          this.GetFileData();
        }
      )
    }
  }






}
