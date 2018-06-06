import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DynCoreModule } from './core/dyn-core.module';
import { DynBasicsModule } from './basics/dyn-bascis.module';
import { DynFormModule } from './forms/dyn-form.module';

import { RouterModule } from '@angular/router';

export { DynCoreModule } from './core/dyn-core.module';

export * from './core/exports';
export * from './basics/dyn-bascis.module';
export * from './forms/exports';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, DynCoreModule, DynBasicsModule, DynFormModule
  ],
  declarations: [ ], 
  exports: [ CommonModule, FormsModule, RouterModule, DynCoreModule, DynBasicsModule, DynFormModule],
  entryComponents: [],
})
export class DynComponentsModule { }
