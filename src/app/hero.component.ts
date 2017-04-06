import { Component, Input, OnInit } from '@angular/core';

import { BeermeService } from './beerme.service';
import { ProductDetailComponent } from './product-detail.component';

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
    beer;
    beerName:string;
    resultsMatchingQuery:Number;

    constructor( private beermeService:BeermeService, private prodDetail:ProductDetailComponent ) {}

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
        this.beermeService.getBeer ( this.searchValue ).subscribe ( resBeermeData => this.prodDetail.setData( resBeermeData ) );
    }

    parseResult(beerResult: any[]) {
		
	}


}