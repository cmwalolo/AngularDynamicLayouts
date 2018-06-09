import {Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InputConfigModel} from '../../configs/input.config.model';
import { InputComponent} from '../../fields/input/input.component';
import { SelectConfigModel} from '../../configs/select.config.model';
import { SelectComponent} from '../../fields/select/select.component';

import { ContainerDirective, CoreComponent} from '../../../core/exports';
import { PropertyComponent} from '../../fields/property.component';

@Component({
  selector: 'cw-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent extends CoreComponent implements OnInit   {
  public static key = "FieldsetComponent";
  
  @ViewChild('dynamicForm', {read: ViewContainerRef}) host : ViewContainerRef;

  @Input() configModel: any;
  @Input() modelValue :any;

  submitted = false;
  
  constructor(private _compiler: Compiler,
              private _injector: Injector,
              private _m: NgModuleRef<any>,
              private elementRef: ElementRef,
              private componentFactoryResolver: ComponentFactoryResolver) { super(); }

  ngOnInit() {
    this.loadComponent(this.host, this.elementRef, this.componentFactoryResolver);
  }

}
