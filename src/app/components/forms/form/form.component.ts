import {Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyComponent, InputConfigModel, InputComponent, SelectConfigModel, SelectComponent} from '../exports';
import { CoreComponent} from '../../core/exports';

@Component({
  selector: 'cw-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class DynFormComponent extends CoreComponent implements OnInit {
  public static key = "DynFormComponent";
  
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
     console.log(this.configModel);
     this.loadComponent(this.host, this.elementRef, this.componentFactoryResolver);
  }

  onSubmit() { 
    console.log(this.modelValue);
    this.submitted = true; 
  }
}
