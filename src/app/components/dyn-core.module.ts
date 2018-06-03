import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DynCoreModule } from './core/dyn-core.module';
import { DynBasicsModule } from './basics/dyn-bascis.module';
import { DynFormModule } from './forms/dyn-form.module';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, DynCoreModule, DynBasicsModule, DynFormModule
  ],
  declarations: [ ], 
  exports: [],
  entryComponents: [],
})
export class DynComponentsModule { }
