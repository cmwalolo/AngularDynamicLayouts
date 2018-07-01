import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DynFormComponent } from './form/form.component';
import { InputComponent } from './fields/input/input.component';
import { SelectComponent } from './fields/select/select.component';
import { FieldsetComponent } from './containers/fieldset/fieldset.component';
import { DesignerModule } from '../designer/designer.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, DesignerModule  
  ],
  declarations: [ DynFormComponent, InputComponent, SelectComponent,  FieldsetComponent], 
  entryComponents: [ InputComponent, SelectComponent, FieldsetComponent, DynFormComponent  ],
})

export class DynFormModule { }
export  { PropertyComponent} from './fields/property.component';
export { FieldsetComponent } from './containers/fieldset/fieldset.component';
export { DynFormComponent} from './form/form.component';
export { InputComponent } from './fields/input/input.component';
export { SelectComponent } from './fields/select/select.component';
export * from './configs/exports';
