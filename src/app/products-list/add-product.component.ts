import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../models/products';
import {ProductsListComponent} from './products-list.component'
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'add-product-component',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
    products:Products[]
    name:string;
    quantity:number;
    manufacturer:string;
    price:number;
    description:string;
    category:string;
    fav:boolean;
    images: string;
    view:number=0;
    check:boolean=false
    product:Products
    @ViewChild('formRef', {static: false}) addEProductForm:NgForm;
   
constructor(private _authService:AuthService, private _productService:ProductService, private _route: ActivatedRoute,private router:Router) { }
  
getProducts():void{
    this._productService.getProductList().subscribe(
      (products:any)=>this.products=products,
    (err)=>console.log(err)
    )
  }

AddProduct():void{
    
    this._productService.addProduct({name:this.name,quantity:this.quantity,manufacturer:this.manufacturer,price:this.price,description:this.description,category:this.category,fav:this.fav,view:this.view,images:this.images,check:this.check}).subscribe(
      (product:any)=>{this.getProducts(),this.router.navigate(['/products'])},
      (err)=>console.log(err)
     
    )
    
  }  
  GoBack(){
      this.router.navigate(["products"])

  }
  
  ngOnInit() {
  }

}
