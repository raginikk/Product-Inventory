import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductService } from '../products-list/products.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  
  id: any;
products:Products[];
productCount:number=0;
emptyCart:boolean=false;
totalPrice:number=0
    constructor(private _productService:ProductService,private route: ActivatedRoute, private router: Router){
    }

    ngOnInit(): void {
        
      
      this._productService.currentCartObject.subscribe(products => this.products = products)
      console.log(this.products)
      this.productCount=this.products.length
      if(this.productCount==0)
      {
        this.emptyCart=true
      }
      
      for(let i =0;i<this.productCount;i++)
      {
        this.totalPrice = parseInt(this.totalPrice.toString()) + parseInt((this.products[i].price).toString())
      }
     // this.totalPrice = this.numberWithCommas(this.totalPrice)
       
    }
    numberWithCommas = (x) => {
      if (x !== null && x !== undefined)
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    RemoveProduct(product:any){
      this.products=this.products.filter((p)=>{
        return p.id!==product.id
      })
      if(this.products.length===0)
      this.emptyCart=true
     this.productCount-=1
      this.totalPrice = parseInt(this.totalPrice.toString())-parseInt(product.price)
      
    }
    
   

    goBack(): void {  
        this.router.navigate(['products']);

            }
      

}
