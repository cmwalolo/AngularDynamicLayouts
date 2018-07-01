import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

export { ComponentConfigModel } from './config/component-config-model';
export { LinkModel } from './models/link-model';
export { EditorState } from './models/editor-state';
export { CoreComponent } from './containers/core.component';
export { PageStateService } from './services/state/page-state.service';
export { IPageModelService } from './interfaces/page-model-service';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,
  ],
  exports: [],
  entryComponents: [],
})

export class DynCoreModule { }
