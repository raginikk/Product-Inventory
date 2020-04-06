import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './user-login.component';
import { UserSignUpComponent } from './user-sign-up.component';

const userRoutes: Routes = [
    { 
      path: 'login', 
      children: [
        { path: '', component: UserLoginComponent },
      
        { path: 'signUp', component: UserSignUpComponent
          
        },
        
  
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [ RouterModule ]
})

export class UserRoutingModule { }
