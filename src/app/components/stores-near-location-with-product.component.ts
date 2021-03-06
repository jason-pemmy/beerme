import { Component, Input } from '@angular/core';

import { ProductDetailComponent } from './product-detail.component';
import { StoresNearLocationWithProduct } from '../models/stores-near-location-with-product.model';

@Component({
    selector: 'store-locations',
    templateUrl: 'app/templates/store-locations.html',
    styleUrls: ['app/styles/store-locations.css']
}) 

export class StoreLocations {
    @Input() storeLocationsAry;
    @Input() gotResults;

    constructor(){} 
}