import { Component, Input, OnInit } from '@angular/core';
import { StoresNearLocationWithProduct } from './stores-near-location-with-product.model';
import { BeermeService } from './beerme.service';
import { ScrollToService } from './scrollTo.service';

@Component({
    selector: 'product-detail', 
    templateUrl: 'app/templates/product-detail.html',
    styleUrls: ['app/styles/product-detail.css']
})

export class ProductDetailComponent implements OnInit {
    productLocation;
    storeLocationsAry = [];
    selectedProductID: any;

    @Input() productAry; 
    @Input() results;    

    constructor( private beermeService:BeermeService, private scrollService: ScrollToService ) {}

    ngOnInit() {} 

    findStoresWithProduct (prodId) {  
        this.selectedProductID = prodId;
        this.beermeService.getProductLocation(prodId).subscribe( resProductLocation => this.parseResult( resProductLocation ) );      
    }

    parseResult (prodLocation) {        
        this.productLocation = [];
        for ( var i = 0; i < prodLocation.result.length; i++ ) {            
            this.productLocation = new StoresNearLocationWithProduct(
                prodLocation.result[i].name,
                prodLocation.result[i].address1,
                prodLocation.result[i].address2,
                prodLocation.result[i].city,
                prodLocation.result[i].telephone,
                prodLocation.result[i].quantity,
                prodLocation.result[i].distance,
                prodLocation.result[i].latitude,
                prodLocation.result[i].longitude);

            this.storeLocationsAry.push(this.productLocation); 
            this.scrollService.scrollTo("#store-locations");           
        }
    }
}