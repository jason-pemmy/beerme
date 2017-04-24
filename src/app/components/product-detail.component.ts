import { Component, Input, OnInit } from '@angular/core';

import { StoresNearLocationWithProduct } from '../models/stores-near-location-with-product.model';
import { BeermeService } from '../services/beerme.service';
import { ScrollToService } from '../services/scrollTo.service';
import { GeolocationService } from '../services/geolocation.service';

@Component({
    selector: 'product-detail', 
    templateUrl: 'app/templates/product-detail.html',
    styleUrls: ['app/styles/product-detail.css']
})

export class ProductDetailComponent implements OnInit {
    productLocation;
    storeLocationsAry = [];
    selectedProductID: any;
    distInkms;
    num;
    gotResults = false;

    @Input() productAry; 
    @Input() results;    

    constructor( private beermeService:BeermeService, private scrollService: ScrollToService, private getUserLocationService: GeolocationService ) {}

    ngOnInit() {} 

    findStoresWithProduct (prodId) {  
        this.selectedProductID = prodId;
        this.getUserLocationService.getCurrentPosition().subscribe( resUserLocation => this.passLatLongToAPI(resUserLocation, prodId));
    }

    passLatLongToAPI(location, prodId) {
        console.log("latitude: "+ location.coords.latitude + " | longitude: "+ location.coords.longitude);
        
        this.beermeService.getProductLocation(prodId, location).subscribe( resProductLocation => this.parseResult( resProductLocation ) );
    }

    parseResult (prodLocation) {        
        this.productLocation = [];
        this.storeLocationsAry = [];
        this.gotResults = true;

        for ( var i = 0; i < prodLocation.result.length; i++ ) {
            this.productLocation = new StoresNearLocationWithProduct(
                prodLocation.result[i].name,
                prodLocation.result[i].address_line_1,
                prodLocation.result[i].address_line_2,
                prodLocation.result[i].city,
                prodLocation.result[i].telephone,
                prodLocation.result[i].quantity,
                prodLocation.result[i].distance_in_meters,
                prodLocation.result[i].latitude,
                prodLocation.result[i].longitude);

            this.storeLocationsAry.push(this.productLocation); 
            this.scrollService.scrollTo("#store-locations"); 

        }
        this.convertMetersToKms(this.storeLocationsAry);
    }

    convertMetersToKms(ary) {        
        for(var i = 0; i < ary.length;i++) {
            this.num = ary[i].distance / 1000;
            ary[i].distance = Math.round(this.num * 100) / 100; 
        }
    }
}