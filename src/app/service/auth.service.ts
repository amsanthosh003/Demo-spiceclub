import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string | undefined;

  // private endPoint1 = "https://admin.jcombiz.com/jcomweb/login.php"
  private endPoint1 = "https://neophroncrm.com/spiceclubnew/api/v2"
  

  constructor(private http: HttpClient) { }


  login(email: string, password: string) { 
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET,POST');
    headers.append('Access-Control-Allow-Origin', '*');
    this.url = `${this.endPoint1}/auth/login`;
    return this.http.post<any>(this.url,{headers: headers,  email, password,})

      .pipe(
        map((user) => {
       localStorage.setItem('currentUser', JSON.stringify(user));
          // this.currentUserSubject.next(user);
          console.log("currentuser:",user);
          return user;
         
        })
      );
  }
  logout() { 
    localStorage.removeItem('currentUser');
    return of({ success: false });
  }
   adduser(body: any) {
    console.log('credentials2',body);
    this.url = `${this.endPoint1}/auth/signup`;
    return this.http.post(this.url, body);
  }

  registerotpverification(body: any) { 
    this.url = `${this.endPoint1}/auth/confirm_code`;
    return this.http.post<any>(this.url, body)
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // console.log(JSON.stringify(user));
          // localStorage.setItem('currentUser', JSON.stringify(user));
          // this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  resendotp(body: any) { 
    this.url = `${this.endPoint1}/auth/resend_code`;
    return this.http.post<any>(this.url, body)
      
  }
  //forgot password
  conformforgot(body: any) { 
    this.url = `${this.endPoint1}/auth/password/forget_request`;
    return this.http.post<any>(this.url, body)
    
      
  }
  resetpassword(body: any) { 
    this.url = `${this.endPoint1}/auth/password/confirm_reset`;
    return this.http.post<any>(this.url, body)
      
  }
  resendforgot(body: any) { 
    this.url = `${this.endPoint1}/auth/password/resend_code`;
    return this.http.post<any>(this.url, body)
      
  }

}
