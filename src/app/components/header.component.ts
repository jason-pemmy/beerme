import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
    selector: 'beer-header',
    templateUrl: 'app/templates/header.html',
    styleUrls: [ 'app/styles/header.css' ]        
})

export class HeaderComponent {
    doToggleHamburger = false;
    body = document.getElementsByTagName("body")[0];
    
    constructor(){}
    
    toggleClass() {
        if(this.doToggleHamburger){
            this.doToggleHamburger = false;
            this.body.classList.remove("disable-scroll");            
        } else {
            this.doToggleHamburger = true;
            this.body.className += "disable-scroll";
        }
    }
} 