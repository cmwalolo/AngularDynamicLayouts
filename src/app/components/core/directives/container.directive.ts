import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cw-container-host]',
})
export class ContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

