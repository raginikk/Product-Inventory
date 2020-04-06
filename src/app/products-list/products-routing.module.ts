import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductComponent} from '../product/product.component'
import {ProductsListComponent} from './products-list.component'
import { AddProductComponent } from './add-product.component';
import { AddProductGuardService } from './add-product-guard.service';
import { UpdateProductComponent } from './update-product.component';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { ProductsGuardService } from './products-guard.service';



const productRoutes: Routes = [
    { 
      path: 'products', 
      children: [
        { path: '', component:ProductsListComponent,
        canActivate:[ProductsGuardService]
     },
        { path: 'add', component: AddProductComponent,
          canDeactivate: [AddProductGuardService]
        },
        { path: ':id', component: ProductComponent
          
        },
        
  { path: 'update/:id', component: UpdateProductComponent ,
  }
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [ RouterModule ]
})

export class ProductsRoutingModule { }
