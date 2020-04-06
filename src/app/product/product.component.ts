import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from '../products-list/products.service'
import { Products } from '../models/products';
import { ProductsListComponent } from '../products-list/products-list.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent implements OnInit {

  id: any;
product:Products;
products:Products[];
view:number;
productsInCart:[]
price:number
    constructor(private _productService:ProductService,private route: ActivatedRoute, private router: Router){
    }
    getProducts():void{
      this._productService.getProductList().subscribe(
        (products:any)=>{this.products=products
        console.log(this.products)},
      (err)=>console.log(err)
      )
    }
    ngOnInit(): void {
        this.route.paramMap.forEach((params: Params) => {
            this.id = params.get('id');
        });
        console.log(this.id)
        
        this.updateView()
        
       
    }
    numberWithCommas = (x) => {
      if (x !== null && x !== undefined)
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    updateView()
    {
     

      this._productService.getProduct(this.id).subscribe(
        (product:any)=>{
          product.view=product.view+1
          this.product=product
          this.price=this.numberWithCommas (product.price)
          this.getProducts()


            this._productService.updateProduct(this.product,this.product.id).subscribe(
              (product:any)=>{

                this.getProducts()},
              (err)=>console.log(err))
    },

  (err)=>console.log(err)
)
    }

    goBack(): void {  
        this.router.navigate(['products']);

            }
    


}
