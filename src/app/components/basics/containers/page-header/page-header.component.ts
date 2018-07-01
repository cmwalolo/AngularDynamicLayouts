import { Component, OnInit, Input, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponent } from '../../../core/dyn-core.module';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent extends CoreComponent implements OnInit {
    public static key = "PageHeaderComponent";
    
    ngOnInit() {}
}
