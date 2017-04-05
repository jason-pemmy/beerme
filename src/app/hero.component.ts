import { Component, OnInit } from '@angular/core';

import { BeermeService } from './beerme.service';

@Component ({
    selector: 'beer-search-hero',
    templateUrl: 'app/templates/hero.html',
    styleUrls: ['app/styles/hero.css']
})

export class HeroComponent implements OnInit {     
    constructor( private beermeService:BeermeService ) {}

    ngOnInit () {
        this.beermeService.getBeer().subscribe( resBeermeData => this.parseResult(resBeermeData) );
    }

    parseResult (res) {}
}