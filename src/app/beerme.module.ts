import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BeermeComponent } from './beerme.component';
import { HeaderComponent } from './header.component';
import { HeroComponent } from './hero.component';
import { BeermeService } from './beerme.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ BeermeComponent, HeaderComponent, HeroComponent ],
  providers: [ BeermeService ],
  bootstrap: [ BeermeComponent ]
})
export class BeermeModule { } 
