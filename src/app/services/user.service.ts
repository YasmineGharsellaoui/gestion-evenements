import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:3000";

  constructor( private httpClient : HttpClient) { }

  public signup(user:any){
    
    return this.httpClient.post<{message:string}>(`${this.userURL + '/api/signup'}`, user)
 }

 
 public addAdmin(user:any){
    
  return this.httpClient.post<{message:string}>(`${this.userURL + '/api/addAdmin'}`, user)
}

 login(user:any){
  console.log("user from service",user);

  return this.httpClient.post<{ findedUser: any}>(`${this.userURL}/api/login`, user);
}

}
