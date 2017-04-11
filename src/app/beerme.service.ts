import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeermeService {
    private url:string = 'app/beerme_apidata/get-product-data.json';
    private storeLocationUrl:string = 'app/beerme_apidata/get-product-data.json'; 
    
    constructor( private http: Http ) {}
    
    getBeer(query) {
        //this.url = 'http://lcboapi.com/products?q='+query;
        return this.http.get ( this.url ).map (( response:Response ) => response.json() );
    }

    getProductLocation( productId:number ) {
        //private StoreLocationUrl:string = 'http://lcbo.com/stores?lat=43.65838&lon=-79.44335&product_id='+productId; 
        return this.http.get ( this.storeLocationUrl ).map (( response:Response ) => response.json() );
    }
} 
