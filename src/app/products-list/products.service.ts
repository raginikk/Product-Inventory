import {Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { Products } from '../models/products'
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ProductService{
    private _productUrl = "http://localhost:4000/products"
    
    private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    constructor(private _http: HttpClient) { }
    

    getProductList()
    {
        return this._http.get(this._productUrl)
    }
    addProduct(product:Products)
    {
        return this._http.post(this._productUrl,product)
    }
   
    updateProduct(product:Products,id:any){
      console.log(product)
      return this._http.put(`${this._productUrl}/${id}`,product)
    }
    deleteProduct(id:any)
    {
      return this._http.delete(this._productUrl+`/${id}`)
    }
    getProduct(id:any){
        return this._http.get(this._productUrl+`/${id}`)
    }


    private messageSource = new BehaviorSubject([]);
    currentCartObject = this.messageSource.asObservable();
    changeCartObject(arr: []) {
    this.messageSource.next(arr)
  }
  private messageSource1 = new BehaviorSubject([]);
    currentFavObject = this.messageSource1.asObservable();
    changeaFavObject(arr: []) {
    this.messageSource.next(arr)
  }

}
