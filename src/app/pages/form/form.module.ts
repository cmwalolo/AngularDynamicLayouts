import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { DynComponentsModule } from '../../components/dyncomponents.module';


import { HeaderModule } from '../../shared/modules/header/header.module';
import { SidebarModule } from '../../shared/modules/sidebar/sidebar.module';
import { DesignerModule } from '../../components/designer/designer.module';
import { DynCoreModule } from '../../components/core/dyn-core.module';
import { DynBasicsModule } from '../../components/basics/dyn-bascis.module';
 

@NgModule({
    imports: [
        CommonModule,        
        NgbModule,
        FormRoutingModule,
        HeaderModule, SidebarModule ,  DesignerModule, DynComponentsModule, DynCoreModule, DynBasicsModule, DesignerModule
        ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [
        FormComponent
    ]
})
export class FormModule {}
