import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

import { ProductDetailModel } from './product-details.model';
import { StoresNearLocationWithProduct } from './stores-near-location-with-product.model';
import { BeermeService } from './beerme.service';

@Component({
    selector: 'product-detail', 
    templateUrl: 'app/templates/product-detail.html',
    styleUrls: ['app/styles/product-detail.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnInit {
    productLocation;
    storeLocationsAry = [];

    @Input() productAry; 
    @Input() results;    

    constructor( private beermeService:BeermeService ) {}

    ngOnInit() {}

    findStoresWithProduct (prodId) {
        console.log("prodID: "+ prodId);
        this.beermeService.getProductLocation(prodId).subscribe ( resProductLocation => this.parseResult( resProductLocation ) );
    }

    parseResult (prodLocation) {
        this.productAry = [];
        this.results = true;
        for ( var i = 0; i < prodLocation.result.length; i++ ) {
            this.productLocation = new ProductDetailModel(
                prodLocation.result[i].name,
                prodLocation.result[i].image_url,
                prodLocation.result[i].is_dead,
                prodLocation.result[i].price_in_cents,
                prodLocation.result[i].origin,
                prodLocation.result[i].inventory_count,
                prodLocation.result[i].producer_name,
                prodLocation.result[i].tertiary_category,
                prodLocation.result[i].package,
                prodLocation.result[i].id);
        }
    }
}