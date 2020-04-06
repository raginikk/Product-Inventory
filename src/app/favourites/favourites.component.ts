import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductService } from '../products-list/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

 
  id: any;
products:Products[];
productCount:number=0;
emptyFav:boolean=false
    constructor(private _productService:ProductService,private route: ActivatedRoute, private router: Router){
    }

    ngOnInit(): void {
        
      
      this._productService.currentFavObject.subscribe(products => this.products = products)
      console.log(this.products)
      this.productCount=this.products.length
      if(this.productCount==0)
      {
        this.emptyFav=true
      }
       
    }
    
   

    goBack(): void {  
        this.router.navigate(['products']);

            }


}
