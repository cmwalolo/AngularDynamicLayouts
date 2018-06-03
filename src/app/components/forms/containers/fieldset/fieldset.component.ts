import {Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InputConfigModel} from '../../configs/input.config.model';
import { InputComponent} from '../../fields/input/input.component';
import { SelectConfigModel} from '../../configs/select.config.model';
import { SelectComponent} from '../../fields/select/select.component';

import { ContainerDirective} from '../../../core/exports';
import { PropertyComponent} from '../../fields/property.component';

@Component({
  selector: 'cw-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent implements OnInit {
  @ViewChild('dynamicForm', {read: ViewContainerRef}) host : ViewContainerRef;

  @Input() configModel: any;
  @Input() modelValue :any;

  submitted = false;
  
  constructor(private _compiler: Compiler,
              private _injector: Injector,
              private _m: NgModuleRef<any>,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
     this.loadComponent();
  }


  loadComponent() {
    this.configModel.children.forEach(obj => {
         let componentFactory = this.componentFactoryResolver.resolveComponentFactory(obj.component);
         let viewContainerRef = this.host;
         let componentRef = viewContainerRef.createComponent(componentFactory);
         (<PropertyComponent>componentRef.instance).configModel = obj;
         (<PropertyComponent>componentRef.instance).modelValue =  this.modelValue;
    });
  }
}
