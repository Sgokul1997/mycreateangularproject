import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  constructor(public http:HttpClient) { }



/*
userstatus() {
        return this.http.get('http://192.168.1.104:3000/users/login');
    }*/

userstatus() {
        return this.http.get('http://192.168.1.80:4300/users/index');
    }


userregister(data) {
	console.log(data);
        return this.http.post('http://192.168.1.80:4300/users/register',{"user": data});
    }
    

}
