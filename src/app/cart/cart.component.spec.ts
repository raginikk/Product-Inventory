import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../products-list/products.service';
import { HttpClientModule } from '@angular/common/http';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
console.log(component)
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientModule
      ],
      declarations: [ CartComponent ],
      providers:[ProductService]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(CartComponent);
      component = fixture.componentInstance;
    });
  }));

 

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should render title in a h4 tag', () => {
  
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('My Cart');
  });
});
