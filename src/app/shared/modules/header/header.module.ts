import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,    
        RouterModule,
        NgbModule.forRoot()  
           
        ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [ HeaderComponent ],
    exports : [ HeaderComponent ]

})
export class HeaderModule {}
