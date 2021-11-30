import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm!: FormGroup;

  

  constructor( private router: Router, private fb: FormBuilder, 
    private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      // meeting_type:['', Validators.required]
    });
 
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    //  this.disable=true;
    console.log("submited");  
    if (this.loginForm.invalid) {
      //  this.disable=false;   
      console.log("err2",);
      return;  
    } else {
      this.authService
        .login(this.f.username.value,this.f.password.value,)
        .subscribe(
          (res) => {          
            // console.log(res); 

            if (res) {
            
              if (res.message == "User not found") {
                console.log("User not found");               
                return;
              }
              if (res.message == "Unauthorized") {  
                console.log("Unauthorized");  
              }
              if (res.message == "Successfully logged in") {  
                console.log("hiii you are logged in");
                this.router.navigate(['/main']);
              }
            } else {
              console.log("Invalid Login"); 
            }
            
          },
          (error: string) => {
            console.log("Invalid email or password")
            console.log("test",""+error);
           
          }
        );
    }
  }

}
