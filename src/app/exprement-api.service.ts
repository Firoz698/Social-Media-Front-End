import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExprementApiService {

  constructor(private https: HttpClient) { }

  config = {
    headers:{
      "Content-Type": "application/json"
    }
  }


GetRequest():Observable<any>{
  debugger
  return this.https.get<any>("https://localhost:7277/api/Communication/GetExprement",this.config);
}
PostReduest(Obje:any):Observable<any>{
  return this.https.post("https://localhost:7277/api/Communication/PostAndEdit",Obje,this.config);
}
PutRequest(PutObje:any):Observable<any>{
  debugger
  return this.https.post("https://localhost:7277/api/Communication/PostAndEdit",PutObje,this.config);
}
DeletedRequest(DeleObject:any):Observable<any>{
  debugger
  return this.https.delete("https://localhost:7277/api/Communication/RemoveExprement?Id="+DeleObject.id,this.config);
}

LoginUser(payload:any):Observable<any>{
  debugger
  return this.https.post("https://localhost:7277/api/Communication/UserLogin",payload,this.config);
}
GetUser(id:number):Observable<any>{
  debugger
  return this.https.get<any>("https://localhost:7277/api/Communication/GetUser?id="+id,this.config);
}

PostGetMethod(id:any):Observable<any>{
  return this.https.get("https://localhost:7277/api/Post/GetPostData?Id="+id,this.config);
}

PostpostMethod(Object:any):Observable<any>{
  debugger
  return this.https.post("https://localhost:7277/api/Post/PostUserpost",Object,this.config);
}

DeletedP(id:any){
  debugger
  return this.https.delete("https://localhost:7277/api/Post/PostDeleted?Id="+id,this.config);
}
UpdateP(){
  return this.https.post("",this.config);
}


ImagePost(FormDat:any):Observable<any>{
  return this.https.post("https://localhost:7277/api/Post/UploadImage",FormDat);
}


GetFileData():Observable<any>{
  debugger
  return this.https.get<any>("https://localhost:7277/api/Post/GetFileData",this.config);
}
}
