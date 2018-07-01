import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DivComponent } from './containers/div/div.component';
import { PageHeaderComponent } from './containers/page-header/page-header.component';
import { RouterModule } from '@angular/router';

export { PageHeaderComponent } from './containers/page-header/page-header.component';
export { DivComponent } from './containers/div/div.component';
export {DivConfigModel} from './configs/div-config.model';
export {PageConfigModel} from './configs/page-config';


@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  declarations: [DivComponent, PageHeaderComponent], 
  exports: [ DivComponent],
  entryComponents: [DivComponent,  PageHeaderComponent],
})
export class DynBasicsModule { }



