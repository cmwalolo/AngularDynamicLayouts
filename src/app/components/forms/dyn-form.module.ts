import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DynFormComponent, InputComponent, SelectComponent, FieldsetComponent } from './exports';
import { RouterModule } from '@angular/router';
import { DynBasicsModule } from '../basics/dyn-bascis.module';
import { ContainerDirective } from '../core/exports';

export * from './exports'

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule  
  ],
  declarations: [ DynFormComponent, InputComponent, SelectComponent,  FieldsetComponent], 
  entryComponents: [ InputComponent, SelectComponent, FieldsetComponent, DynFormComponent  ],
})
export class DynFormModule { }
