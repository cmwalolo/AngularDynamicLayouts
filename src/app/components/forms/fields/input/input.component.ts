import { InputConfigModel} from '../../configs/input.config.model';
import { Component, forwardRef, HostBinding, Input, ContentChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, AbstractControl, NgModel } from '@angular/forms';
import { PropertyComponent} from '../property.component';

@Component({
  selector: 'cw-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }
]
})
export class InputComponent extends PropertyComponent implements ControlValueAccessor {
  @Input() configModel: InputConfigModel;
  @Input() modelValue:string;

  constructor() { super(); }

}
