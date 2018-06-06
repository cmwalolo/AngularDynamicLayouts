import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ContainerDirective } from './exports';
import { RouterModule } from '@angular/router';

export *  from './exports';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
  ],
  declarations: [ ContainerDirective ], 
  exports: [],
  entryComponents: [],
})
export class DynCoreModule { }
