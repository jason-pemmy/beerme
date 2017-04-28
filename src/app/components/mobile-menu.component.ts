import { Component, Input, OnInit } from '@angular/core';
//import { trigger, state, style, animate, transition } from '@angular/animations';

import { ProductDetailModel } from '../models/product-details.model'; 
import { BeermeService } from '../services/beerme.service';

@Component({
    selector: 'mobile-menu',
    templateUrl: 'app/templates/mobile-menu.html',
    styleUrls: ['app/styles/mobile-menu.css'],
    /*animations: [
        trigger('heroState', [
            state('inactive', style({
                opacity: 0
            })),
            state('active',   style({
                opacity: 1
            })),
            transition('inactive => active', animate('500ms ease-in')),
            transition('active => inactive', animate('500ms ease-out'))
        ])
    ] */    
})

export class MobileMenu implements OnInit {
    @Input() doToggleHamburger;
    state: string;
    productFeatureAry = [];
    productDetailModel;
    results = false;

    ngOnInit() {
        this.beermeService.getProductFeature().subscribe(resProductFeature => this.parseProductFeatureData(resProductFeature));
    }
    
    constructor( private beermeService:BeermeService ) {
        if(this.doToggleHamburger) {
            //this.state = 'inactive';
        } else {
            //this.state = 'active';
        }
    }

    parseProductFeatureData ( beerResult ) {
        for ( var i = 0; i < beerResult.result.length; i++ ) {
            this.productDetailModel = new ProductDetailModel(
                beerResult.result[i].name,
                beerResult.result[i].image_url,
                beerResult.result[i].is_dead,
                beerResult.result[i].price_in_cents,
                beerResult.result[i].origin,
                beerResult.result[i].inventory_count,
                beerResult.result[i].producer_name,
                beerResult.result[i].tertiary_category,
                beerResult.result[i].package,
                beerResult.result[i].id);

            if ( !beerResult.result[i].is_dead ) {                 
                this.productFeatureAry.push(this.productDetailModel);
                this.results = true;
             }
        }
    }
} 