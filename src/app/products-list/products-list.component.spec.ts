import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ProductsListComponent } from './products-list.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared-module';
import { CommonModule } from '@angular/common';
import { ProductService } from './products.service';
import { DataService } from '../user/user-login/data.service';
import { AuthService } from '../auth.service';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientModule,SharedModule,CommonModule
      ],
      declarations: [ ProductsListComponent ],
      providers: [ProductService,DataService,AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should trigger addProductLink method when button is clicked',fakeAsync(()=>{
    component.checkAdmin=true
    fixture.detectChanges();
    spyOn(component,'addProductLink');
    
    let addEl = fixture.debugElement.query(By.css('button'))
    addEl.triggerEventHandler('click',null);
    tick();
    fixture.detectChanges();
    expect(component.addProductLink).toHaveBeenCalled();
   
  }))
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
});
