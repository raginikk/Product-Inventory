
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import { Products } from '../models/products';
import { ProductService } from './products.service';


@Component({
  selector: 'top-view-component',
  templateUrl: './top-viewed.component.html',
  styleUrls: ['./top-viewed.component.css'],
})
export class TopViewedComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,

    scales: { xAxes: [{}], yAxes: [{
        ticks: {
            beginAtZero: true
        }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'bottom',
      }
    }
  };
  products:Products[];
  public barChartLabels=[]
  public barChartData =[]
  public data=[];
  views:number=10
  constructor( private _productService:ProductService) { }
  getProducts():void{
    this.barChartLabels=[]
    this.barChartData=[]
    this.data=[]
    this._productService.getProductList().subscribe(
        (products:any)=>{this.products=products

            this.products.sort((a,b) => b.view-a.view);
            
            this.products.map((product,i)=>{
                if(i<this.views)
                    {this.barChartLabels.push(product.name)

                    this.data.push(product.view)
                    console.log(product.view)
                    i++}
                   

            })
           
            console.log(this.data)
            this.barChartData = [{data:this.data,label:"Products"}]


        },
      (err)=>console.log(err)
      )
      
  }
  
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  

  ngOnInit() {
    this.getProducts()
    
    
  }
ViewTop3(){
    this.views=3
    this.getProducts()
}
ViewTop5(){
    this.views=5
    this.getProducts()
}
ViewTop10(){
    this.views=10
    this.getProducts()
}

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
