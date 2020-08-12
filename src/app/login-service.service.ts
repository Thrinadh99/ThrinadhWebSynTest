import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  myusername: string;
  mypassword: string;

  constructor(private http: HttpClient, private router: Router) {}

public getlogin(): Observable<any> {
    return this.http.get("./assets/loginDetails.json");
}
public getorderdetails(): Observable<any>{
  return this.http.get("./assets/orderdetails.json");
}
public signinUser(username: string, password: string){
  this.myusername = username;
  this.mypassword = password;
  this.getlogin().subscribe(data => {
    //console.log('from serv', data);
    //console.log('from serv' + username + password);
    if(username == data.username && password == data.credential){
      console.log("login success");
      //return true;
      this.router.navigate(['main']);
    }
    else{
      this.router.navigate(['/']);
    }
  })
}

public isAuthenticated(): any{
  this.getlogin().subscribe(data => {
    if(this.myusername == data.username && this.mypassword == data.credential){
      return true;
    }
    else{
      return false;
    }
  })
}
}
