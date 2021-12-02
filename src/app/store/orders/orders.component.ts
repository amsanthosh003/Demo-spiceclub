import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { RequestService } from 'src/app/service/request.service';
import { User } from '../../core/models/user';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>;
  userid: any;
  accesstoken: any;
  tokentype: any;Proce: any;
  currentdetail: User;
  Orders: any;
  prdid: any;
  Items: any;
  Detail: any;
  loadingIndicator: boolean | undefined;
  page2: boolean=true;
  page1: boolean=false;

  constructor(private request: RequestService,  private fb: FormBuilder,
    private modalService: NgbModal,) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser')||'{}')     
    );
    
    this.currentUser = this.currentUserSubject.asObservable();
     this.currentdetail = this.currentUserSubject.value;
     this.userid=this.currentdetail.user.id;
     this.accesstoken=this.currentdetail.access_token;
     this.tokentype=this.currentdetail.token_type;
     console.log("currentuserid=", this.userid);


   }

  ngOnInit(): void {
    this.getorders();
  }
  getorders(){
    this.request.fetchOrders(this.userid).subscribe((response: any) => {
      this.Orders=response.data;   
      console.log("orders",this.Orders);     
    // this. processdata()    
    });
  }
  viewrow(Connectdtls:any){
this.prdid=Connectdtls.id;
  this. viewdetail();
  this.viewitem();
  }
  viewdetail(){
 
     this.request.vieworderdetail(this.prdid).subscribe((response: any) => {
   
       this.Detail=response;
      //  product_id=this.Peoduct.id;
       console.log("product detail",response);   
       this.page1=false,
       this.page2=true,
       setTimeout(() => {
         this.loadingIndicator = false;
       }, 500);    
     }
     ); 
   }

   viewitem(){
 
     this.request.vieworderitems(this.prdid).subscribe((response: any) => {
     this.Items=response;     
       console.log("items",this.Items);
       
     }
     ); 
   }
 
}
