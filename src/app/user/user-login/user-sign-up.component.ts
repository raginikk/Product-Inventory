import { Component, OnInit, EventEmitter, Output, Injectable, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/auth.service';
import { Location } from "@angular/common";
import { emptyScheduled } from 'rxjs/internal/observable/empty';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserSignUpComponent implements OnInit {

  users:Users[]
  
    message:string="";
    role:string="Customer"

    signedUp:boolean=false
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private _authService:AuthService,private _userService:UserService,private route: ActivatedRoute, private router: Router,private loc: Location,private data:DataService){
  }

  ngOnInit(): void {
      this.getUsers()
  }
  getUsers():void{
    this._userService.getUserList().subscribe(
      (users:any)=>this.users=users,
    (err)=>console.log(err)
    )
  }
  

    addUser(formValue: any):void{
      
  let userFound = this.users.filter((user)=>{
    
    return user.email===formValue.email
  });
  console.log(userFound)
  if(userFound.length===0)
   { 
    
      if(formValue.Cpassword===formValue.password && formValue.mobileNo.toString().length==10)
      {this._authService.login();
      console.log("Signed In");
      //this.router.navigate(['products'])
      this.data.changeMessage(formValue.firstName)
      this.data.changeUserRole(this.role)
      this.signedUp=true
      this._userService.addUser(
        {email:formValue.email,
        password:formValue.password,
        firstName:formValue.firstName,
        lastName:formValue.lastName,
        location:formValue.location,
        mobileNo:formValue.mobileNo,
        gender:formValue.gender,
      role:this.role}).subscribe((user:any)=>this.getUsers(),
        (err)=>console.log(err) )
        
    }
    else if(formValue.mobileNo.toString().length!==10)
    this.message="Enter valid mobile number"
      else{
        this.message="Password doesn't match!"
       
       
      }
    }
      else
      this.message="User already exists! Try different email."
    
  } 
  GoToLogin(){
      this.router.navigate(['login']);
   }
    

    
    
   
}
