import { Component, Input, OnInit } from '@angular/core';

import { BeermeService } from './beerme.service';
import { ProductDetailModel } from './product-details.model';

@Component ({
    selector: 'beer-search-hero',
    templateUrl: 'app/templates/hero.html',
    styleUrls: ['app/styles/hero.css']
})

export class HeroComponent implements OnInit {
    queryParams: String;
    searchInput;
    newQuery: String;
    doShowSearchBtn:Boolean = false;
    searchValue:String;
    beerName:string;
    resultsMatchingQuery:Number;
    productQueryResults = [];
    product;
    productAry = [];
    results = false;

    constructor( private beermeService:BeermeService ) {}

    ngOnInit () {        
        this.searchInput = document.getElementById('beer-search-box');
    }

    checkSearchValue () {
        let name = this.newQuery.trim();
        this.searchValue = name;

        if (name.length >= 1) {
            this.doShowSearchBtn = true;            
        } else {
            this.doShowSearchBtn = false;
        }
    }

    queryAPI () {
        this.beermeService.getBeer ( this.searchValue ).subscribe ( resBeermeData => this.parseResult( resBeermeData ) );
    }

    parseResult(beerResult) {
        this.productAry = [];
        this.results = true;
        for ( var i = 0; i < beerResult.result.length; i++ ) {
            this.product = new ProductDetailModel(
                beerResult.result[i].name,
                beerResult.result[i].image_url,
                beerResult.result[i].is_dead,
                beerResult.result[i].price_in_cents,
                beerResult.result[i].origin,
                beerResult.result[i].inventory_count,
                beerResult.result[i].producer_name,
                beerResult.result[i].tertiary_category);

            if ( !beerResult.result[i].is_dead ) { 
                this.productAry.push(this.product);
             }
        }
	}
}