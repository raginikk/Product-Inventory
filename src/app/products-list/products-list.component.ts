import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../user/user-login/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
 
})
export class ProductsListComponent implements OnInit {
products:Products[];
productsInCart:Products[]=[];
favProducts:Products[]=[];
checkAdmin:boolean=false;
userRole:string="";
sortProduct:string="LowPrice";
deleteSelectedArr:Products[]=[]


  constructor(private _authService:AuthService, private _productService:ProductService, private _route: ActivatedRoute,private router:Router,private data:DataService) { }
  getProducts():void{
    this._productService.getProductList().subscribe(
      (products:any)=>{this.products=products,
        this.sortProducts()
      console.log(this.products)},
    (err)=>console.log(err)
    )
  }
  numberWithCommas = (x) => {
    if (x !== null && x !== undefined)
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  DeleteItem(id:any){
 
    console.log(id)
    this._productService.deleteProduct(id).subscribe(
      ((products:any)=>this.getProducts()),
     (err)=>console.log(err)
    )
  }
  UpdateItem(id:any){
   this.router.navigate([`products/update/${id}`])
  }

  ngOnInit() {
      this.getProducts()
      this._productService.currentCartObject.subscribe(ob=>this.productsInCart=ob)
      this._productService.currentFavObject.subscribe(ob=>this.favProducts=ob)
            
      this.data.currentUserRole.subscribe(role=>this.userRole=role)
      console.log(this.userRole,this.isLoggedIn())
      
      if(this.userRole==="Admin"&& this.isLoggedIn())
      {
        console.log("Admin")
        this.checkAdmin=true
      }
      else 
      {console.log("not Admin")
          this.checkAdmin=false
      }
      console.log(this.sortProduct)
      

  }
  isLoggedIn() {
    console.log("yes")
    return this._authService.isLoggedIn();
  }
  addProductLink()
  {
    this.router.navigate(['/products/add'])
    
  }

  AddToFav(product:any){
    console.log(this.isLoggedIn())
    if(this.isLoggedIn())
    {console.log(product)
    product.fav=!product.fav

   console.log(this.products)
    this.favProducts.push(product)}
    else
    alert("You have not logged in, Log in first.")
  }
  AddToCart(product:any){
    if(this.isLoggedIn())
    {this.productsInCart.push(product)
    
    console.log(this.productsInCart,product)}
    else
    alert("You have not logged in, Log in first.")
  }
  sortProducts(){
   
    console.log(this.sortProduct)
    if(this.sortProduct==="LowPrice")
      {
        this.products.sort((a,b) => a.price-b.price);

      }
      else if(this.sortProduct==="HighPrice")
      {
        this.products.sort((a,b) => b.price-a.price);

      }
      else if(this.sortProduct==="TopViewed")
      {
        this.products.sort((a,b) => b.view-a.view);
      }
    
  }
  checkProduct(product:any){
    if(this.userRole==="Admin")
    {
      product.check=!product.check
      if(product.check)
      {
        this.deleteSelectedArr.push(product)
      }
      else
      {
        this.deleteSelectedArr.pop()
      }
    }
  }
  deleteSelected(){
this.deleteSelectedArr.map(product=>{
  this._productService.deleteProduct(product.id).subscribe(
    ((products:any)=>this.getProducts()),
   (err)=>console.log(err)
  )
})
  }
}
