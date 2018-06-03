import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        LayoutRoutingModule
    ],
    declarations: [LayoutComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    exports : []
})
export class LayoutModule {}
