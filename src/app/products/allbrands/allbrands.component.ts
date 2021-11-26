import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-allbrands',
  templateUrl: './allbrands.component.html',
  styleUrls: ['./allbrands.component.css']
})
export class AllbrandsComponent implements OnInit {
  loadingIndicator: boolean | undefined;
  Allbrands: any;
  link="https://neophroncrm.com/spiceclubnew/api/v2/";
  openbrand: any;
  Brands: any;
  page2: boolean=false;
  page1: boolean=true;
  discount:boolean =false;
  Peoduct: any;
  page3: boolean=false;
  openproduct: any;
  product_id: any;
  Topsell: any;

  constructor(private router: Router,private fb: FormBuilder,private request: RequestService,) { }

  ngOnInit(): void {
    this.viewdata()
  }
  
viewdata(){
  this.request.getallbrands().subscribe((response: any) => {
    // this.data = data;
    // this.filteredData = data;
    this.Allbrands=response.data;
    this.page1=true,
    this.page2=false,
    console.log("response.data",response.data);
    console.log("allbrands",this.Allbrands);
    // this.filteredData=data.response;
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });
}
viewrow(img: any){
  this.openbrand=img.links.products
  // console.log("detail",img.links.products);
  this.viewbrand();
}

viewbrand(){
  this.request.viewallbrands(this.openbrand).subscribe((response: any) => {
    // this.data = data;
    // this.filteredData = data;
    this.Brands=response.data;
    this.page1=false
    this.page2=true
    console.log("response.data",response.data);
   
  
    // this.filteredData=data.response;
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });

}

viewbrandproductrow(img: any){
  this.openproduct=img.links.details
console.log("detail", this.openproduct);
  this.viewbrandproduct();
}

viewbrandproduct(){
  var product_id
  this.request.viewbrandsproducd(this.openproduct).subscribe((response: any) => {
    // this.data = data;
    // this.filteredData = data;
    this.Peoduct=response.data[0];
     product_id=this.Peoduct.id;
    console.log("topsellis",product_id);
   console.log("response.data",this.Peoduct);
    this.page1=false,
    this.page2=false,
    this.page3=true,
  
    // this.filteredData=data.response;
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });
  console.log("topsellis",product_id);
this.topsellingproduct();
}
topsellingproduct(){
  // console.log("topsellis",product_id);
  
  console.log("topsellis",this.product_id);
  this.request.topsellproduct(this.product_id).subscribe((response: any) => {
    // this.data = data;
    // this.filteredData = data;
    this.Topsell=response;
    // this.product_id=this.Peoduct.id;

    console.log("response.data",this.Topsell
    );
 
  
    // this.filteredData=data.response;
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 500);
  });

}
}