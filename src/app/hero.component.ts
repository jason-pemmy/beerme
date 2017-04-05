import { Component, Input, OnInit } from '@angular/core';

import { BeermeService } from './beerme.service';

@Component ({
    selector: 'beer-search-hero',
    templateUrl: 'app/templates/hero.html',
    styleUrls: ['app/styles/hero.css']
})

export class HeroComponent implements OnInit {
    queryParams: String;
    searchInput;
    newQuery: String;

    constructor( private beermeService:BeermeService ) {}

    ngOnInit () {
        //this.beermeService.getBeer().subscribe( resBeermeData => this.parseResult(resBeermeData) );
        this.searchInput = document.getElementById('beer-search-box');
    }

    checkSearchValue () {
        let name = this.newQuery.trim();        
        
        if (name.length > 1) {
            console.log("***: "+ name);        
        }
    }

    queryAPI () { 
       // this.beermeService.getBeer().subscribe( resBeermeData => this.parseResult(resBeermeData) );
    }


}