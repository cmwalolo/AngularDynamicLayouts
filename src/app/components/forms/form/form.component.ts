import {Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyComponent, InputConfigModel, InputComponent, SelectConfigModel, SelectComponent} from '../dyn-form.module';
import { CoreComponent} from '../../core/dyn-core.module';

@Component({
  selector: '[cw-form]',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class DynFormComponent extends CoreComponent implements OnInit {
  public static key = "DynFormComponent";
  
  @ViewChild('dynamicForm', {read: ViewContainerRef}) host : ViewContainerRef;

  submitted = false;

  onSubmit() { 
    console.log(this.modelValue);
    this.submitted = true; 
  }
}
