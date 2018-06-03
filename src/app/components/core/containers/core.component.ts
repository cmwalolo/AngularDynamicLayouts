import { Component, Input, OnInit } from '@angular/core';
import { ComponentConfigModel } from '../../core/exports';

@Component({
  selector: 'cw-basic'
})
export class CoreComponent implements OnInit   {
  ngOnInit(): void {

  }
  
  @Input() configModel: ComponentConfigModel;
  @Input() modelValue: any;
}
