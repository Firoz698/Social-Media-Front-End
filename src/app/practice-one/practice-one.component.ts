import { Component, OnInit } from '@angular/core';
import { ExprementApiService } from '../exprement-api.service';
import { Practice } from './PracticeClass';

@Component({
  selector: 'app-practice-one',
  templateUrl: './practice-one.component.html',
  styleUrls: ['./practice-one.component.css']
})
export class PracticeOneComponent implements OnInit {

  DataList: any[] = [];
  SearchModel:string="";
  IsTrue: boolean = false;
  oPractice = new Practice();

  constructor(private MyService: ExprementApiService) { }
  ngOnInit(): void {
    this.GetData()
  }

  RewMethod(Itmes: any) {
    debugger
    if (this.oPractice.id == Itmes.id) {
      this.oPractice.id = 0;
      this.GetData();
    } else {

      this.oPractice = Itmes;
    }
  }
  OpneModal() {
    this.GetData();
    this.IsTrue = false;
    document.getElementById('ModalDI')?.click();
    this.oPractice.id = 0;
    this.oPractice.name = "";
    this.oPractice.email = "";
    this.oPractice.password = "";
    this.oPractice.contact = "";
    this.oPractice.address = "";
  }
  GetData() { this.MyService.GetRequest().subscribe((ress) => { this.DataList = ress; }) }
  SaveChangeMethod() {
    this.oPractice.id = 0;
    this.MyService.PostReduest(this.oPractice).subscribe(
      (ress) => { this.GetData(); })
    document.getElementById('CloseId')?.click();
  }
  EditMethod() {
    if (this.oPractice.id > 0) {
      this.IsTrue = true;
      document.getElementById('ModalDI')?.click();
    } else {
      alert("please Select Row")
    }
  }
  DeletedMethod() {
    if (this.oPractice.id > 0) {
      if(confirm("Do You Want to Deletes thid Row")){
        this.MyService.DeletedRequest(this.oPractice).subscribe(
          (res) => {
            console.log(res)
            this.GetData();
          }
        )
      }
    } else {
      alert('Plase Seletc Row')
    }
  }
  UpdateMethod() {
    this.MyService.PutRequest(this.oPractice).subscribe(
      (res) => {
        console.log(res)
        this.GetData();
      }
    )
    document.getElementById('CloseId')?.click();
  }






}
