import {ElementRef, Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {  CoreComponent} from '../../../core/dyn-core.module';
import { DivConfigModel } from '../../configs/div-config.model';

@Component({
  selector: '[cw-div]',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent extends CoreComponent  {
  public static key = "DivComponent"; 
}
