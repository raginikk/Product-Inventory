import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { Location } from "@angular/common";
import { AuthService } from 'src/app/auth.service';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:Users;
  users:Users[];
  email:string;
  password:string;
  LoginStatus:boolean;
  message:string;
  firstName:string;
  role:string
  constructor(private _authService:AuthService, private _userService:UserService,private route: ActivatedRoute, private router: Router,private location: Location,private data:DataService) { }

  ngOnInit() {
    this.getUsers()
    this.data.currentMessage.subscribe(message => this.email = message)
  }
  
   
  getUsers():void{
    this._userService.getUserList().subscribe(
      (users:any)=>this.users=users,
    (err)=>console.log(err)
    )
  }

  LoginUser(email:string,password:any)
  {
    
    console.log(this.users,email)
    let userFound = this.users.filter((user)=>{
      if(user.email===email)
        {this.firstName=user.firstName
        this.role=user.role}
      return user.email===email && user.password===password
    });
    let userIncorrectpassword = this.users.filter((user)=>{
      if(user.email===email)
        {this.firstName=user.firstName
        this.role=user.role}
      return user.email===email && user.password!==password
    });
    console.log(userFound)

    if(userFound.length>0)
    {
      this._authService.login();
      console.log("Logged In");
      //this.location.back();
     this.router.navigate(['products']) 
     this.data.changeMessage(this.firstName)
     this.data.changeUserRole(this.role)
    }
    else if(userFound.length==0)
    {
      if(userIncorrectpassword.length>0)
      {
        this.message="Incorrect Username or password!"
      }
        else
        
        this.message="User doesn't exist!!"
    }
  }
}
