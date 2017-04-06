import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeermeService {
    private url:string = 'app/beerme_apidata/get-product-data.json'; 
    //private url:string;
    
    constructor(private http: Http) {}
    
    getBeer(query) {
        //this.url = 'http://lcboapi.com/products?q='+query;
        return this.http.get ( this.url ).map (( response:Response ) => response.json() );
    }
} 
