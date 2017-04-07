import { Component, NgZone, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html',
    styleUrls: ['app/styles/product-detail.css'],
    changeDetection: ChangeDetectionStrategy.Default
})

export class ProductDetailComponent {
    beer;
    @Input() public beerName = "duf";

    constructor() {}

    get rowData(): string {
        console.debug('getting row data ' + this.beerName);        
        return this.beerName;
    }

    setData (res: any) {
        this.beer = res;  
        this.beerName = this.beer.result[0].name;
        console.log(this.beerName);      
        //this.test = "new test"; 
    }
}