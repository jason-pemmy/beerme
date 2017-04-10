import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html',
    styleUrls: ['app/styles/product-detail.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnInit {
    beer;
    //beerName: string;
    brewer: string;
    beerImg: string; 
    @Input() beerName = "duf";

    constructor() {this.beerName = "duf"}

    ngOnInit() {}

    setData (res: any) {        
        this.beer = res;		
		this.beerName = this.beer.result[0].name;
        console.log("name: "+ this.beerName);
    }
}