import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {

   }
  apiurl='http://localhost:3000/user';

  GetAll(){
    return this.http.get(this.apiurl);
  }
  GetbyCode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  GetAllrole(){
    return this.http.get(' http://localhost:3000/role');
  }

  Proceedregistration(inputdata:any){
    return this.http.post(this.apiurl,inputdata);
  }

  Updateuser(code:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+code,inputdata);
  }

  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }


  IsloggedIn(): boolean {
    return sessionStorage.getItem('username') !== null;
  }

  GetUserRole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }


}
