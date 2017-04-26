import { Component, Input } from '@angular/core';
//import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'mobile-menu',
    templateUrl: 'app/templates/mobile-menu.html',
    styleUrls: ['app/styles/mobile-menu.css'],
    /*animations: [
        trigger('heroState', [
            state('inactive', style({
                opacity: 0
            })),
            state('active',   style({
                opacity: 1
            })),
            transition('inactive => active', animate('500ms ease-in')),
            transition('active => inactive', animate('500ms ease-out'))
        ])
    ] */    
})

export class MobileMenu {
    @Input() doToggleHamburger;
    state: string;

    constructor(){
        if(this.doToggleHamburger) {
            this.state = 'inactive';
        } else {
            this.state = 'active';
        }
    }
}