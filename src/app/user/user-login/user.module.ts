import { NgModule } from '@angular/core';
import { UserComponent } from '../user.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared-module';
import { UserService } from './user.service';
import { AuthService } from 'src/app/auth.service';
import { DataService } from './data.service';
import { AppComponent } from 'src/app/app.component';
import { UserSignUpComponent } from './user-sign-up.component';
import { UserLoginComponent } from './user-login.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'src/app/app.module';
import { AboutComponent } from 'src/app/about/about.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
     
    UserSignUpComponent,
    UserLoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule,SharedModule,CommonModule,UserRoutingModule
  ],
  providers: [UserService,AuthService,DataService],
 
})

export class UserModule { }
