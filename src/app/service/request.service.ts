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
    console.log("currentuser=", this.currentUser);
    console.log("currentusezr=", this.currentdetail.access_token);

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
      console.log("sts",this.url)
      return this.http.post(this.url,body,{headers:headers});
   
  }
  public fetchusercart(id:any,) {  
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer'+' '+ this.accesstoken)
    this.url = `${this.endPoint1}/carts/` + id;
    console.log("sts",headers)
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

  public fetchuserwishlist(id:any,) {  
    const headers = new HttpHeaders() 
    .set('Authorization', 'Bearer'+' '+ this.accesstoken)
    this.url = `${this.endPoint1}/wishlists/` + id;
    console.log("sts",this.url)
    return this.http.get(this.url,{headers:headers});      
  }
  deletewishproud(id:any) {  
    const headers = new HttpHeaders()
    
    .set('Authorization', 'Bearer'+' '+ this.accesstoken)
    this.url = `${this.endPoint1}/wishlists/` + id;
    return this.http.delete(this.url,{headers:headers});
}
// address
public addaddress(body:any) {
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer'+' '+ this.accesstoken)    
   this.url = `${this.endPoint1}/user/shipping/create`;
   return this.http.post(this.url,body,{headers:headers});
}
public fetchcountry() {
  this.url = `${this.endPoint1}/countries`;
  return this.http.get(this.url);
}
public fetchstate() {
  this.url = `${this.endPoint1}/states`;
  return this.http.get(this.url);
}
public fetchCity() {
  this.url = `${this.endPoint1}/cities`;
  return this.http.get(this.url);
}
public fetchaddress(id:any) {
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer'+' '+ this.accesstoken) 
  this.url = `${this.endPoint1}/user/shipping/address/` + id;
  return this.http.get(this.url,{headers:headers});
}
public updateaddress(body:any) {
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer'+' '+ this.accesstoken) 
  this.url = `${this.endPoint1}/user/shipping/update`;
  return this.http.post(this.url,body,{headers:headers});
}
deleteaddress(id:any) {  
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer'+' '+ this.accesstoken)
  this.url = `${this.endPoint1}/user/shipping/delete/` + id;
  return this.http.get(this.url,{headers:headers});
}
public fetchcost(body:any) {
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer'+' '+ this.accesstoken) 
  this.url = `${this.endPoint1}/shipping_cost`;
  return this.http.post(this.url,body,{headers:headers});
}
// futuredproduct
public getfuturedpro() {
  this.url = `${this.endPoint1}/products/featured`;
  return this.http.get(this.url);
}
// bestseling pro
public getbestsellpro() {
  this.url = `${this.endPoint1}/products/best-seller`;
  return this.http.get(this.url);
}
// orders
public fetchOrders(id:any) {
  const headers = new HttpHeaders()
  .set('Authorization', 'Bearer'+' '+ this.accesstoken)    
   this.url = `${this.endPoint1}/purchase-history/`  + id;
   return this.http.get(this.url,{headers:headers});
}
public vieworderdetail(id:any) {
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer'+' '+ this.accesstoken) 
  this.url = `${this.endPoint1}/purchase-history-details/` + id;
  return this.http.get(this.url,{headers:headers});
}
public vieworderitems(id:any) {
  const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Authorization', 'Bearer'+' '+ this.accesstoken) 
  this.url = `${this.endPoint1}/purchase-history-items/` + id;
  return this.http.get(this.url,{headers:headers});
}

}
