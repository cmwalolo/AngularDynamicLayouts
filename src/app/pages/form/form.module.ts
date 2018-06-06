import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { DynComponentsModule } from '../../components/dyn-core.module';
import { DynBasicsModule } from '../../components/dyn-core.module';
import { DynCoreModule } from '../../components/dyn-core.module';


import { HeaderModule } from '../../shared/modules/header/header.module';
import { SidebarModule } from '../../shared/modules/sidebar/sidebar.module';


@NgModule({
    imports: [
        CommonModule,        
        NgbModule,
        FormRoutingModule,
        HeaderModule, SidebarModule ,  DynComponentsModule, DynCoreModule, DynBasicsModule
        ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [
        FormComponent
    ]
})
export class FormModule {}
