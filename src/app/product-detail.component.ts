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
		this.beerName = this.beer[0];
        console.log("name: "+ this.beer[0].result);
    }
}