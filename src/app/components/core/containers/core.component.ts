import { Component, Input, OnInit, ViewContainerRef, ElementRef, Compiler, Injector, NgModuleRef, ComponentFactoryResolver, Type } from '@angular/core';
import { ComponentConfigModel } from '../../core/exports';

@Component({
  selector: 'cw-basic'
})
export class CoreComponent implements OnInit   {
  ngOnInit(): void {

  }
  
  @Input() configModel: ComponentConfigModel;
  @Input() modelValue: any;


  loadComponent(host:ViewContainerRef, elementRef:ElementRef, componentFactoryResolver:ComponentFactoryResolver) {

    var configModel  = <ComponentConfigModel> this.configModel;  
    elementRef.nativeElement.className = configModel.className;
    configModel.children.forEach(obj => {
          let  factories = Array.from(componentFactoryResolver['_factories'].keys());
          let factoryClass = <Type<any>>factories.find((x: any) => x.name ===obj.component);
          const factory = componentFactoryResolver.resolveComponentFactory(factoryClass);
         let componentRef = host.createComponent(factory);
         (<CoreComponent>componentRef.instance).configModel = obj;
         (<CoreComponent>componentRef.instance).modelValue =  this.modelValue;
    });
  }
}
