import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {  TimelineComponent,  NotificationComponent, ChatComponent } from './components';

import { DynComponentsModule} from '../../components/dyn-core.module';

import { HeaderModule } from '../../shared/modules/header/header.module';
import { SidebarModule } from '../../shared/modules/sidebar/sidebar.module';
import { DynBasicsModule } from '../../components/basics/dyn-bascis.module';
import { DynCoreModule } from '../../components/core/dyn-core.module';


@NgModule({
    imports: [
        CommonModule,        
        NgbModule,
        DashboardRoutingModule,
        HeaderModule, SidebarModule ,  DynComponentsModule, DynCoreModule, DynBasicsModule
        ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class DashboardModule {}
