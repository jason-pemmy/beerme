import { Component } from '@angular/core';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html',
    styleUrls: ['app/styles/product-detail.css']
})

export class ProductDetailComponent {
    beer;
    beerName: string;

    constructor() {}

    setData (res: any) {        
        this.beer = res;		
		this.beerName = this.beer.result[0].name;
        //console.log("name: "+ this.beerName);
        for( var i=0; i < this.beer.result.length; i++ ) {
            console.log("**-");
        }
    }
}