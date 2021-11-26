import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router, private fb: FormBuilder, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }
  logout(){
    console.log("loggg")
    this.authService.logout().subscribe( res=>{
      console.log("res",res);
      if(res.success==false){
      this.router.navigate(['/login']);}
    })
  }

}
