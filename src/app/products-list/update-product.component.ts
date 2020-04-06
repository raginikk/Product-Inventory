import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductService } from './products.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from "@angular/common";

@Component({
  selector: 'update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class UpdateProductComponent implements OnInit {
products:Products[];
product:Products
    name:string="";
    quantity:number=0;
    manufacturer:string="";
    price:number=0;
    description:string="";
    category:string="";
    fav:boolean=false;
    view:number;
    images: string
    id:any;
    check:boolean=false
checkAdmin:boolean=true;
checkProduct:boolean=false



  constructor(private _authService:AuthService, private _productService:ProductService, private route: ActivatedRoute,private router:Router,private location:Location) { }
  ngOnInit() {

    this.route.paramMap.forEach((params: Params) => {
        this.id = params.get('id');
    });
    console.log(this.id)
    
    this.getProduct()
    this.getProducts()
    
      }
  getProducts():void{
    this._productService.getProductList().subscribe(
      (products:any)=>{this.products=products
      console.log(this.products)},
    (err)=>console.log(err)
    )
    
  }
  getProduct(){
    this._productService.getProduct(this.id).subscribe(
      (product:any)=>{
      
      this.product=product
    console.log(this.product.name)
    if(this.product.name){
      this.name=this.product.name,
      this.quantity=this.product.quantity,
      this.manufacturer=this.product.manufacturer,
      this.price=this.product.price,
      this.description=this.product.description,
      this.category=this.product.category,
      this.fav=this.product.fav,
      this.view=this.product.view
      this.images=this.product.images
      this.checkProduct=true
    }
    },
      (err)=>console.log(err)
    )
  }
  UpdateProduct()
  {
    
    this._productService.updateProduct({name:this.name,quantity:this.quantity,manufacturer:this.manufacturer,price:this.price,description:this.description,category:this.category,fav:this.fav,view:this.view,images:this.images,check:this.check},this.id).subscribe(
      (product:any)=>{
        console.log(product)
        this.getProducts(),this.router.navigate(['products'])},
      (err)=>console.log(err)
     
    )
  
  }
  

 
  isLoggedIn() {
    return this._authService.isLoggedIn();
  }
  Cancel(){
    this.location.back()
  }
  
  
  
}
