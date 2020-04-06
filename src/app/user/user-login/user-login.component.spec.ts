import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { DebugElement } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';
import { AuthService } from 'src/app/auth.service';
import { DataService } from './data.service';
import { UserSignUpComponent } from './user-sign-up.component';
import { UserComponent } from '../user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared-module';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientModule
      ],
      declarations: [ UserLoginComponent ],
      providers:[AuthService,UserService,DataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should trigger LoginUser method when button is clicked',fakeAsync(()=>{
    
    fixture.detectChanges();
    spyOn(component,'LoginUser');
    let addEl = fixture.debugElement.query(By.css('button'))
    addEl.triggerEventHandler('click',null);
    tick();
    fixture.detectChanges();
    expect(component.LoginUser).toHaveBeenCalled();
   
  }))
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

 
});
