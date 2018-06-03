import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { HeaderModule } from '../../shared/modules/header/header.module';
import { SidebarModule } from '../../shared/modules/sidebar/sidebar.module';

@NgModule({
    imports: [CommonModule, ChartsRoutingModule, HeaderModule, SidebarModule],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [ChartsComponent]
})
export class ChartsModule {}
