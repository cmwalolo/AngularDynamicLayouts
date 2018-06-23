import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

export *  from './exports';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
  ],
  exports: [],
  entryComponents: [],
})
export class DynCoreModule { }
