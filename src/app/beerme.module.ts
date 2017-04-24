import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { BeermeComponent } from './components/beerme.component';
import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { StoreLocations } from './components/stores-near-location-with-product.component';
import { MobileMenu } from './components/mobile-menu.component';
 
import { BeermeService } from './services/beerme.service';  
import { ScrollToService } from './services/scrollTo.service';
import { GeolocationService } from './services/geolocation.service';

@NgModule({
  imports: [ BrowserModule, 
              HttpModule, 
              FormsModule,
              /*RouterModule.forRoot([
								{ path: 'product-detail', component: ProductDetailComponent }								
							])*/], 
  declarations: [ BeermeComponent, HeaderComponent, HeroComponent, ProductDetailComponent, StoreLocations, MobileMenu],
  providers: [ BeermeService, ProductDetailComponent, ScrollToService, GeolocationService ],
  bootstrap: [ BeermeComponent ]
})
export class BeermeModule { } 
