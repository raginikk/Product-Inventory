import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignUpComponent } from './user/user-login/user-sign-up.component';
import { AddProductComponent } from './products-list/add-product.component';
import { CartComponent } from './cart/cart.component';

import { TopViewedComponent } from './products-list/top-viewed.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AddProductGuardService } from './products-list/add-product-guard.service';
import { ProductsGuardService } from './products-list/products-guard.service';



const routes: Routes = [

  {
    path:'',component:AboutComponent
  },
  {
    path:'products', component:ProductsListComponent
  },
  
  { path: 'cart',component:CartComponent
  },
  { path: 'fav', component:FavouritesComponent
  },
  {
    path:"topViewed",component:TopViewedComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
