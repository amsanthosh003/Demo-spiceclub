import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../../core/models/user';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  loadingIndicator: boolean | undefined;
  Cart: any;
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  currentdetail: User;
  userid: any;
  accesstoken: any;
  tokentype: any;Proce: any;
  _values1 = [" 1 ", "2", " 3 "," 4 "," 5 "," 6 "];
  quantityy: any;
  Summery: any;
  Address: any;
  Scost: any;
  cost: any;
  cosst: boolean=false;
  caart: boolean=true;
  owneriid: any;
  Grandtot: any;


  constructor(private router: Router,private fb: FormBuilder,private request: RequestService,) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')||'{}')
      
    );
    
    this.currentUser = this.currentUserSubject.asObservable();
     this.currentdetail = this.currentUserSubject.value;
     this.userid=this.currentdetail.user.id;
     this.accesstoken=this.currentdetail.access_token;
     this.tokentype=this.currentdetail.token_type;
     console.log("currentuserid=", this.userid);
     console.log("currentuserdetail=", this.currentdetail);
   }

  ngOnInit(): void {
    this.viewcart();
    this.viewcart3();
  }
  viewcart(){
    this.request.fetchusercart(this.userid).subscribe((response: any) => {
      this.Cart=response;   
      console.log("cart",response);   
      console.log("owner id",this.Cart[0].owner_id);
      this.owneriid=this.Cart[0].owner_id;

    // this. processdata()
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  
  }
  // processdata(){
  //   let edata={
  //     cart_ids:"54,59",
  //     cart_quantities:"2,1"
  //   }
  //   console.log("edata",edata);
  //   this.request.fetchcartprocess(edata).subscribe((response: any) => {
  //     this.Proce=response;   
  //     console.log("cart",response);  ;
  //     setTimeout(() => {
  //       this.loadingIndicator = false;
  //     }, 500);
  //   });
  
  // }
  deleteRecord(id:any) {
    console.log("row",id);
    this.request.deleteproud(id).subscribe((response: any) => {
      console.log(response);
      if(response.message=="Product is successfully removed from your cart"){
        console.log("deleted");
        this.viewcart();
        this.viewcart3();
      }
      else{
        console.log("error ,product is not deleted")
      }

     }, (error: any) => {
       console.log(error);
     });
  }
  firstDropDownChanged(data: any,_id:any)  {
    console.log(data.target.value);
    this.quantityy=data.target.value;
    let edata2={
      id:_id,
      quantity:  this.quantityy
    }
    console.log("edata2",edata2);

     this.request.updatecart(edata2).subscribe((response:any) => {
       console.log("response",response);
       this.viewcart();
       this.viewcart3();
     });
  }
  viewcart3(){
    this.request.fetchsummery(this.userid).subscribe((response: any) => {
      this.Summery=response;   
      this.Grandtot=this.Summery.grand_total
      console.log("summery",response);    
      console.log("grand total",this.Summery.grand_total); 
    // this. processdata()
      setTimeout(() => {
        this.loadingIndicator = false;
      }, 500);
    });
  
  }

  proshipping(){
    this.caart=false
    this.cosst=true;
    this.getaddress();
  }

  getaddress(){
    this.request.fetchaddress(this.userid).subscribe((response: any) => {
      this.Address=response.data;   
      console.log("Address",this.Address);     
    // this. processdata()    
    });
  }
  shippingcost(row:any){
    console.log("row id",row.city_name); 
    let edata={
      owner_id:this.owneriid,
      user_id:this.userid,
      city_name:row.city_name
    }
    console.log("edatat",edata); 
    this.request.fetchcost(edata).subscribe((response: any) => {
      this.Scost=response; 
      this. cost= this.Scost.value_string
      console.log("Scost",this.cost);     
    // this. processdata()    
    });
  }

}
