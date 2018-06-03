import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarService } from './shared/services/sidebar-service/sidebar-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './shared';
import { DynFormModule } from './components/forms/dyn-form.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [ ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    DynFormModule, FormsModule
  ],
  providers: [SidebarService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule  {

}

