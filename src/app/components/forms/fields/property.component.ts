import { Component, forwardRef, HostBinding, Input, ContentChild, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, AbstractControl, NgModel } from '@angular/forms';
import { CoreComponent } from '../../core/dyn-core.module';

@Component({
  selector: 'cw-form-basic',
  templateUrl: './input/input.component.html',
  styleUrls: ['./input/input.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PropertyComponent),
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => PropertyComponent),
        multi: true
    }
]
})
export class PropertyComponent extends CoreComponent implements ControlValueAccessor {
  @Input() modelValue:any;
  @Input() configModel: any;

  valid: boolean; 
  pristine:boolean; 
  disabled:boolean;

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public elementRef : ElementRef
  ) {  super(componentFactoryResolver, elementRef); 
        this.valid = false;
        this.pristine = true;
        this.disabled = false;
    }


  get value() {
      return this.modelValue[this.configModel.name];
  }

  set value(value: string) {
      this.pristine= false;
      this.modelValue[this.configModel.name] = value;
      this.validate();
      this.onChange(value);
  }

  writeValue(value: string) {
      if (value) {
          this.value = value;
      }
  }

  onInput(value: string) {
      this.value = value;
  }

  onChange: (_: any) => void = () => {};

  registerOnChange(fn: any) {
      this.onChange = fn;
  }

  onTouch: (_: any) => void = () => {};
  registerOnTouched(fn: any) { this.onTouch = fn; }
  
  validate()  {
    this.valid = this.value != "";
  }

  setDisabledState?(isDisabled: boolean)
  {
     this.disabled = isDisabled; 
  }

}
