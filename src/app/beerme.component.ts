import { Component, OnInit } from '@angular/core';

import { BeermeService } from './beerme.service';
import { HeaderComponent } from './header.component';

@Component({
	selector: 'beerme',
	template: `	<beer-header></beer-header>
				<beer-search-hero></beer-search-hero>
				<router-outlet></router-outlet>`,
})

export class BeermeComponent implements OnInit {
	beers = [];
	storeLocations = [];
	beerName: String;
	isClassVisible = false;
	
	constructor( private _beermeService: BeermeService ) {}

	ngOnInit() {}

	parseResult(beerResult: any[]) {
		this.beers = beerResult;		
		this.beerName = this.beers[0].product.name;

		for(var i=0; i < this.beers[0].result.length; i++) {
			this.storeLocations.push(this.beers[0].result[i]);
		}
	}
}