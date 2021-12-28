import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  msg:string="";

  constructor(@Inject(HttpClient) private http:HttpClient) { }

  GetWelcomeMsg(){
    return this.http.get("http://localhost:9090/welcome",{responseType:"text"})
   }
}
