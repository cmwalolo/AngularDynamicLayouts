import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,   RouterModule     
        ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [ SidebarComponent ],
    exports : [ SidebarComponent ]

})
export class SidebarModule {}
