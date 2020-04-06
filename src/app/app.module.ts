import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {FormsModule} from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignUpComponent } from './user/user-login/user-sign-up.component';
import { AddProductComponent } from './products-list/add-product.component';
import { ProductService } from './products-list/products.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user-login/user.service';
import { AuthService } from './auth.service';
import { CartComponent } from './cart/cart.component';
import { DataService } from './user/user-login/data.service';
import { SearchFilterPipe } from './shared/search-filter';
import { SharedModule } from './shared/shared-module';
import { UpdateProductComponent } from './products-list/update-product.component';
import { TopViewedComponent } from './products-list/top-viewed.component';
import { ChartsModule } from 'ng2-charts';

import { ProductModule } from './products-list/products.module';
import { UserModule } from './user/user-login/user.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopViewedComponent,


  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule,SharedModule,ChartsModule,UserModule,ProductModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService,DataService],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
