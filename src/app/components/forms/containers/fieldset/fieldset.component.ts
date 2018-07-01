import { Input, Compiler, Injector, NgModule, NgModuleRef, ComponentFactoryResolver, Component, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InputConfigModel } from '../../configs/input.config.model';
import { InputComponent } from '../../fields/input/input.component';
import { SelectConfigModel } from '../../configs/select.config.model';
import { SelectComponent } from '../../fields/select/select.component';

import { CoreComponent } from '../../../core/dyn-core.module';
import { PropertyComponent } from '../../fields/property.component';

@Component({
  selector: 'fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent extends CoreComponent implements OnInit {
  public static key = "FieldsetComponent";

  submitted = false;

}
