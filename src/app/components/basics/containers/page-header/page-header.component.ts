import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponent } from '../../../core/exports';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent extends CoreComponent implements OnInit {
    
    constructor() { super(); }

    ngOnInit() {}
}
