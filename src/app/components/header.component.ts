import { Component } from '@angular/core';

@Component({
    selector: 'beer-header',
    templateUrl: 'app/templates/header.html',
    styleUrls: [ 'app/styles/header.css' ]    
})

export class HeaderComponent {
    doToggleHamburger = false;
    constructor(){}
    
    toggleClass() {
        if(this.doToggleHamburger){
            this.doToggleHamburger = false;
        } else {
            this.doToggleHamburger = true;
        }
    }
}