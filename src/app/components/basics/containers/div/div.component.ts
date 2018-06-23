import {ElementRef, Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {  CoreComponent} from '../../../core/exports';
import { DivConfigModel } from '../../configs/div-config.model';

@Component({
  selector: '[cw-div]',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent extends CoreComponent  {
  public static key = "DivComponent";
  @ViewChild('dynamicComponent', {read: ViewContainerRef}) host:ViewContainerRef;
  
  submitted = false;
  
  constructor(public _compiler: Compiler,
              public _injector: Injector,
              public _m: NgModuleRef<any>,
              public componentFactoryResolver: ComponentFactoryResolver,
              public elementRef : ElementRef
            ) {  super()}

  ngOnInit() {
     this.loadComponent(this.host, this.elementRef, this.componentFactoryResolver);
  }


}
