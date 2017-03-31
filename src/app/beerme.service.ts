import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BeermeService {
    private _url:string = 'app/beerme_apidata/sample-data.json'; 
    constructor(private _http: Http) {}
    getBeer() {
        return this._http.get(this._url).map((response:Response) => response.json());
    }

} 
