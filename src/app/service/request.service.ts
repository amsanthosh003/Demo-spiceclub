import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url: string | undefined;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;

  // private endPoint1 = "https://admin.jcombiz.com/jcomweb/login.php"
  private endPoint1 = "https://neophroncrm.com/spiceclubnew/api/v2"
  currentdetail: User;
  userid: any;
  accesstoken: any;
  tokentype: any;


  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')

    );
    console.log("currentuser details=", this.currentUserSubject);
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentdetail = this.currentUserSubject.value;
    this.userid = this.currentdetail.user.id;
    this.accesstoken = this.currentdetail.access_token;
    this.tokentype = this.currentdetail.token_type;
    // console.log("currentuser=", this.currentUser);
    // console.log("currentusezr=", this.currentdetail.access_token);

  }


  public getallbrands() {
    this.url = `${this.endPoint1}/brands`;
    return this.http.get(this.url);
  }

  public viewallbrands(link: string) {
    return this.http.get(link);

  }
  public viewbrandsproducd(link: string) {
    return this.http.get(link);
  }

  public topsellproduct(id: string) {
    this.url = `${this.endPoint1}/products/top-from-seller/` + id;
    return this.http.get(this.url);
  }
  public getslider() {
    this.url = `${this.endPoint1}/sliders`;
    return this.http.get(this.url);
  }
  public getfuturedcat() {
    this.url = `${this.endPoint1}/categories/featured`;
    return this.http.get(this.url);
  }

  public viewallfeatured(link: string) {
    return this.http.get(link);

  }

  public viewfeatproducd(link: string) {
    return this.http.get(link);
  }
  public getbanner() {
    this.url = `${this.endPoint1}/banners`;
    return this.http.get(this.url);
  }
  public addtocart(body: any) {
  const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', 'Bearer'+' '+ this.accesstoken)
      // .set('Access-Control-Allow-Origin', '*')
      this.url = `${this.endPoint1}/carts/add`;
    // console.log("sts",newconnect)
      return this.http.post(this.url, body, {headers:headers});
   
  }
  public fetchusercart(id:any,) {  
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer'+' '+ this.accesstoken)
    this.url = `${this.endPoint1}/carts/` + id;
    console.log("sts",this.url)
    return this.http.post(this.url,null,{headers:headers});
    
    
  }
  public fetchcartprocess(body:any) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer'+' '+ this.accesstoken)
    this.url = `${this.endPoint1}/carts/process`;
    return this.http.post(this.url, body, {headers:headers});
    
  }
  deleteproud(id:any) {  
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer'+' '+ this.accesstoken)
    this.url = `${this.endPoint1}/carts/remove/` + id;
    return this.http.get(this.url,{headers:headers});
}

updatecart(body:any) {  
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer'+' '+ this.accesstoken)
  this.url = `${this.endPoint1}/carts/change-quantity`;
  return this.http.post(this.url,body,{headers:headers});
}
fetchsummery(id:any) {  
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer'+' '+ this.accesstoken)
  this.url = `${this.endPoint1}/cart-summary/` + id;
  return this.http.get(this.url,{headers:headers});
}
public addtowishlist(body: any) {
  const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Authorization', 'Bearer'+' '+ this.accesstoken)
      
      this.url = `${this.endPoint1}/wishlists`;
    // console.log("sts",newconnect)
      return this.http.post(this.url, body, {headers:headers});
   
  }

}
