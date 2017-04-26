import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
    selector: 'beer-header',
    templateUrl: 'app/templates/header.html',
    styleUrls: [ 'app/styles/header.css' ],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee'
            })),
            state('active',   style({
                backgroundColor: '#cfd8dc'
            })),
            transition('inactive => active', animate('2000ms ease-in')),
            transition('active => inactive', animate('2000ms ease-out'))
        ])
    ]    
})

export class HeaderComponent {
    doToggleHamburger = false;
    state = 'inactive';
    body = document.getElementsByTagName("body")[0];
    
    constructor(){}
    
    toggleClass() {
        if(this.doToggleHamburger){
            this.doToggleHamburger = false;
            this.state = 'inactive';
            this.body.classList.remove("disable-scroll");            
        } else {
            this.doToggleHamburger = true;
            this.state = 'active';
            this.body.className += "disable-scroll";
        }
    }
}