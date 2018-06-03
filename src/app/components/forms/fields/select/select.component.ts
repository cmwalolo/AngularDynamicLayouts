import { SelectConfigModel} from '../../configs/select.config.model';
import { Component, forwardRef, HostBinding, Input, ContentChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, AbstractControl, NgModel } from '@angular/forms';
import { PropertyComponent} from '../property.component';

@Component({
  selector: 'cw-form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => SelectComponent),
        multi: true
    }
]
})
export class SelectComponent extends PropertyComponent implements ControlValueAccessor     {
  @Input() config: SelectConfigModel;

  constructor() { super(); }


}
