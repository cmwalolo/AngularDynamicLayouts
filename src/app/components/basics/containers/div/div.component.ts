import {ElementRef, Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ContainerDirective, CoreComponent} from '../../../core/exports';
import { DivConfigModel } from '../../configs/div-config.model';

@Component({
  selector: '[cw-div]',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent extends CoreComponent  {
  @ViewChild('dynamicComponent', {read: ViewContainerRef}) host:ViewContainerRef;
  
  submitted = false;
  
  constructor(private _compiler: Compiler,
              private _injector: Injector,
              private _m: NgModuleRef<any>,
              private componentFactoryResolver: ComponentFactoryResolver,
              private elementRef : ElementRef
            ) {  super();}

  ngOnInit() {
     this.loadComponent();
  }


  loadComponent() {
    var configModel  = <DivConfigModel> this.configModel;  
    this.elementRef.nativeElement.className = configModel.className;
    configModel.children.forEach(obj => {
         let componentFactory = this.componentFactoryResolver.resolveComponentFactory(obj.component);
         let viewContainerRef = this.host;
         let componentRef = viewContainerRef.createComponent(componentFactory);
         (<CoreComponent>componentRef.instance).configModel = obj;
         (<CoreComponent>componentRef.instance).modelValue =  this.modelValue;
    });
  }
}
