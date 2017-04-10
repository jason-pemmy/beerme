import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

import { ProductDetailModel } from './product-details.model';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html',
    styleUrls: ['app/styles/product-detail.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductDetailComponent implements OnInit {

    @Input() productAry; 
    @Input() results;    

    constructor() {}

    ngOnInit() {}
}