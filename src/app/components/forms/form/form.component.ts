import {Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyComponent, InputConfigModel, InputComponent, SelectConfigModel, SelectComponent} from '../exports';
import { ContainerDirective} from '../../core/exports';

@Component({
  selector: 'cw-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class DynFormComponent implements OnInit {
  @ViewChild('dynamicForm', {read: ViewContainerRef}) host : ViewContainerRef;

  @Input() configModel: any;
  @Input() modelValue :any;

  submitted = false;
  
  constructor(private _compiler: Compiler,
              private _injector: Injector,
              private _m: NgModuleRef<any>,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
     console.log(this.configModel);
     this.loadComponent();
  }

  onSubmit() { 
    console.log(this.modelValue);
    this.submitted = true; 
  }


  loadComponent() {
    this.configModel.children.forEach(obj => {
         let componentFactory = this.componentFactoryResolver.resolveComponentFactory(obj.component);
         let viewContainerRef = this.host;
         let componentRef = viewContainerRef.createComponent(componentFactory);
         (<PropertyComponent>componentRef.instance).configModel = obj;
         (<PropertyComponent>componentRef.instance).modelValue = this.modelValue;
    });
  }
}
