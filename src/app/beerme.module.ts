import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { BeermeComponent } from './beerme.component';
import { HeaderComponent } from './header.component';
import { HeroComponent } from './hero.component';
import { ProductDetailComponent } from './product-detail.component';
import { BeermeService } from './beerme.service';

@NgModule({
  imports: [ BrowserModule, 
              HttpModule, 
              FormsModule,
              RouterModule.forRoot([
								{ path: 'product-detail', component: ProductDetailComponent }								
							])], 
  declarations: [ BeermeComponent, HeaderComponent, HeroComponent, ProductDetailComponent],
  providers: [ BeermeService, ProductDetailComponent ],
  bootstrap: [ BeermeComponent ]
})
export class BeermeModule { } 
