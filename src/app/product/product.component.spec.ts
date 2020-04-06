import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from '../products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared-module';
import { ProductModule } from '../products-list/products.module';
import { ProductService } from '../products-list/products.service';
import { CommonModule } from '@angular/common';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientModule,FormsModule,SharedModule,CommonModule
      ],
      declarations: [ ProductComponent,ProductsListComponent],
      providers:[ProductService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
