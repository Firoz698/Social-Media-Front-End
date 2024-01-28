import { Component, OnInit } from '@angular/core';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { ExprementApiService } from '../exprement-api.service';
import { Practice } from '../practice-one/PracticeClass';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit{

  oPractice = new Practice();
  IsTrue:boolean=false;
  

constructor(private httpSer:ExprementApiService){}
  ngOnInit(): void {
    this.getData();
  }


rowData:any[]=[];


colDefs:ColDef[]=[
  {field:'id'},
  {field:'name'},
  {field:'email'},
  {field:'account'},
  {field:'contact'},
  {field:'address'},
];
defaultColDef:ColDef ={
  sortable: true,filter:true
}
RowDbblClick(){
  document.getElementById('ModalDI')?.click();
}


onSelectionChanged(event:any) {
  this.oPractice.id=event.data.id;
  this.oPractice.name=event.data.name;
  this.oPractice.email=event.data.email;
  this.oPractice.password=event.data.account;
  this.oPractice.contact=event.data.contact;
  this.oPractice.address=event.data.address;
  this.IsTrue=true;
  console.log(event.data)
}


getData(){
  this.httpSer.GetRequest().subscribe(
    (res)=>{
      console.log(res);
      this.rowData=res;
    }
  )
}
AddUserMethod(){
  debugger
  this.IsTrue=false;
  document.getElementById('ModalDI')?.click();
  this.oPractice.id=0;

}

CloseMethod(){
  this.oPractice.id=0;
  this.oPractice.name="";
  this.oPractice.email="";
  this.oPractice.password="";
  this.oPractice.contact="";
  this.oPractice.address="";
}

UpdateData(){
debugger
  this.httpSer.PutRequest(this.oPractice).subscribe(
    (res)=>{
      console.log(res)
      this.getData();
    }
  )
  document.getElementById('CloseId')?.click();
  this.oPractice.id=0;
  this.oPractice.name="";
  this.oPractice.email="";
  this.oPractice.password="";
  this.oPractice.contact="";
  this.oPractice.address="";
}
SaveChange(){
  this.httpSer.PostReduest(this.oPractice).subscribe(
    (res)=>{
      console.log(res)
      this.getData();
    }
  )
  document.getElementById('CloseId')?.click();
}





}
