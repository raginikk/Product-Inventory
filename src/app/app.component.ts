import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router,Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { UserSignUpComponent } from './user/user-login/user-sign-up.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { DataService } from './user/user-login/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Inventory';
  user:string
  isLoading:boolean=true
  constructor(private _authService: AuthService, private _router: Router,private data:DataService) { 
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }
      else if (event instanceof NavigationEnd || 
        event instanceof NavigationError ||
        event instanceof NavigationCancel) {
          this.isLoading = false;
        }
    }) 
    
  }
  isLoggedIn() {
    return this._authService.isLoggedIn();
  }
  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.user = message)
    console.log(this.user)
  }

  changeToLoginRoute() {
    this._authService.logout();
    console.log("Logged Out");
    this._router.navigate(['login']);
  }
  

}
