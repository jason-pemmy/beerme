import { Component, OnInit } from '@angular/core';

import { BeermeService } from './beerme.service';
import { HeaderComponent } from './header.component';

@Component({
	selector: 'beerme',
	template: `	<beer-header></beer-header>
				<h3>{{this.beerName}}</h3>
				<ul *ngFor="let storeLocation of storeLocations">
					<li>{{storeLocation.name}}</li>
				</ul>`,
})

export class BeermeComponent implements OnInit {
	beers = []; 
	storeLocations = []; 
	beerName: String;	
	
	constructor( private _beermeService: BeermeService ) {}

	ngOnInit() {
		this._beermeService.getBeer().subscribe( resBeermeData => this.parseResult(resBeermeData) );			
	}

	parseResult(beerResult: any[]) {
		this.beers = beerResult;		
		this.beerName = this.beers[0].product.name;

		for(var i=0; i < this.beers[0].result.length; i++) {
			this.storeLocations.push(this.beers[0].result[i]) ;			
		}		
	}
} 