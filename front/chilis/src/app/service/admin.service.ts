import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {


 
  constructor(private http:HttpClient) { }
  
  Addplat(body:any){
    return this.http.post('http://127.0.0.1:8080/api/createProduct',body)
  }
  gettAllplat(){
    return this.http.get('http://127.0.0.1:8080/api/getProduct')
  }
  updateplat(id:string,newh:any){
    return this.http.put('http://127.0.0.1:8080/api/updateProduct/:id',newh)
  }
 
  deleteplat(id:any){
    return this.http.get('http://127.0.0.1:8080/api/deleteProduct/:id')
  }
 
  uploadImage(){
    return this.http.get('http://127.0.0.1:8080/api/upload')
  }

}
