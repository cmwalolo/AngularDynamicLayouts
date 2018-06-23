import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DivComponent, PageHeaderComponent } from '../basics/exports';
import { RouterModule } from '@angular/router';
import { DynCoreModule} from '../core/dyn-core.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, DynCoreModule
  ],
  declarations: [DivComponent, PageHeaderComponent], 
  exports: [ DivComponent],
  entryComponents: [DivComponent,  PageHeaderComponent],
})
export class DynBasicsModule { }


export { PageHeaderComponent } from './containers/page-header/page-header.component';
export { DivComponent } from './containers/div/div.component';
export * from './configs/exports';
