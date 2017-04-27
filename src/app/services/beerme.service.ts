import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeermeService {    
    private url:string = 'app/beerme_apidata/get-product-data.json';    
    private storeLocationUrl:string = 'app/beerme_apidata/stores-near-point-with-product.json'; 
    private productFeature:string = 'app/beerme_apidata/product-feature.json';

    constructor( private http: Http ) {}
    
    getBeer(query) {
        //this.url = 'http://lcboapi.com/products?q='+query;
        return this.http.get ( this.url ).map (( response:Response ) => response.json() );
    }

    getProductFeature() {
        //this.url = 'http://lcboapi.com/products?q='+query;
        return this.http.get ( this.productFeature ).map (( response:Response ) => response.json() );
    }

    getProductLocation( productId:number, location:any ) {
        //this.storeLocationUrl = 'http://lcboapi.com/stores?lat='+location.coords.latitude+'&lon='+location.coords.longitude+'&product_id='+productId; 
        return this.http.get ( this.storeLocationUrl ).map (( response:Response ) => response.json() );
    }
} 
