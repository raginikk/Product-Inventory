import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  //let component: UserComponent;
  //let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let fixture = TestBed.createComponent(UserComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
