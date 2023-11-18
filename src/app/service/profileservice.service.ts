import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})

export class ProfileserviceService {


  constructor(private http: HttpClient  ) {}
  getProfile(){

    return this.http.get(`http://localhost:3000/user/A1`);
  }


}
