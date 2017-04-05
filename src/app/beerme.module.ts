import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BeermeComponent } from './beerme.component';
import { HeaderComponent } from './header.component';
import { HeroComponent } from './hero.component';
import { BeermeService } from './beerme.service';

@NgModule({
  imports: [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ BeermeComponent, HeaderComponent, HeroComponent ],
  providers: [ BeermeService ],
  bootstrap: [ BeermeComponent ]
})
export class BeermeModule { } 
