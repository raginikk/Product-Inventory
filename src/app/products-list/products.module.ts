import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductsListComponent } from './products-list.component';
import { AddProductComponent } from './add-product.component';
import { UpdateProductComponent } from './update-product.component';
import { TopViewedComponent } from './top-viewed.component';
import { FavouritesComponent } from '../favourites/favourites.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared-module';
import { ChartsModule } from 'ng2-charts';
import { ProductService } from './products.service';
import { UserService } from '../user/user-login/user.service';
import { AuthService } from '../auth.service';
import { DataService } from '../user/user-login/data.service';
import { AppComponent } from '../app.component';
import { CartComponent } from '../cart/cart.component';
import { AddProductGuardService } from './add-product-guard.service';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';
import { ProductsGuardService } from './products-guard.service';


@NgModule({
  declarations: [
    
    ProductComponent,
    ProductsListComponent,
    AddProductComponent,
    UpdateProductComponent,
    FavouritesComponent,
    CartComponent,
    
  ],
  imports: [
    CommonModule,ProductsRoutingModule,SharedModule,FormsModule
  ],
  providers: [AddProductGuardService,ProductService,UserService,AuthService,DataService],
 


})
export class ProductModule { }
