import { Component, Input } from '@angular/core';

@Component({
    selector: 'mobile-menu',
    templateUrl: 'app/templates/mobile-menu.html',
    styleUrls: ['app/styles/mobile-menu.css'] 
})

export class MobileMenu {
    @Input() doToggleHamburger;

    leftMenu = document.getElementsByClassName("left-menu")[0];
    righttMenu = document.getElementsByClassName("right-menu")[0];

    constructor(){
        if(this.doToggleHamburger) {
            console.log("**--**");
            this.leftMenu.className += "open";
        }
    }
}