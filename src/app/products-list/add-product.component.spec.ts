import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './add-product.component';
import { By } from '@angular/platform-browser';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, FormsModule],
      declarations: [ AddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//   it('should trigger AddProduct method when button is clicked',fakeAsync(()=>{
    
//     fixture.detectChanges();
//     spyOn(component,'AddProduct');
//     let addEl = fixture.debugElement.query(By.css('button'))
//     addEl.triggerEventHandler('click',null);
//     tick();
//     fixture.detectChanges();
//     expect(component.AddProduct).toHaveBeenCalled();
   
//   }))
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
