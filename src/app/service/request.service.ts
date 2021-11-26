import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url: string | undefined;

  // private endPoint1 = "https://admin.jcombiz.com/jcomweb/login.php"
  private endPoint1 = "https://neophroncrm.com/spiceclubnew/api/v2"
  

  constructor(private http: HttpClient) { }

 
  public getallbrands(){
    this.url = `${this.endPoint1}/brands`;
    return this.http.get(this.url);
  }

  public viewallbrands(link: string){
    return this.http.get(link);
 
    }
    public viewbrandsproducd(link: string){
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
    
    public viewallfeatured(link: string){
      return this.http.get(link);
   
      }
      
      public viewfeatproducd(link: string){
        return this.http.get(link);
      } 
      public getbanner() {
        this.url = `${this.endPoint1}/banners`;
        return this.http.get(this.url);
      }
}
