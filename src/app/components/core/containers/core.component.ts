import { Component, Input, OnInit, ViewContainerRef, ElementRef, Compiler, Injector, NgModuleRef, ComponentFactoryResolver, Type, ViewChild } from '@angular/core';
import { ComponentConfigModel } from '../../core/dyn-core.module';

@Component({
  selector: 'cw-basic'
})
export class CoreComponent implements OnInit   {

  @ViewChild('dynamicComponent', {read: ViewContainerRef}) host:ViewContainerRef;

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public elementRef : ElementRef
  ) {  }

  ngOnInit() {
    this.canHaveChildren = true;
    this.parentComponent = this.parent;
    this.loadComponent(this.host, this.elementRef, this.componentFactoryResolver);
  }


  @Input() configModel: ComponentConfigModel;
  @Input() modelValue: any;
  @Input() editorState: any;
  @Input() parent: CoreComponent;

  canHaveChildren:boolean;
  parentComponent:CoreComponent;

  loadComponent(host:ViewContainerRef, elementRef:ElementRef, componentFactoryResolver:ComponentFactoryResolver) {
    var configModel  = <ComponentConfigModel> this.configModel;  
    elementRef.nativeElement.className = configModel.className;

    if (this.canHaveChildren)
    {
      elementRef.nativeElement.className +=  " cw-rel";
      if (configModel.children != null)
      {
        let  factories = Array.from(componentFactoryResolver['_factories'].keys());

        let factoryClass =  <Type<any>>factories.find((x: any) => x.key === "EditBarComponent");
        if (factoryClass != null)
        {
          let factory = componentFactoryResolver.resolveComponentFactory(factoryClass);
          let componentRef = host.createComponent(factory);
          (<CoreComponent>componentRef.instance).parent = this;
          (<CoreComponent>componentRef.instance).editorState =  this.editorState;
          (<CoreComponent>componentRef.instance).configModel = configModel;
        }
  
        configModel.children.forEach(obj => {
            let factoryClass =  <Type<any>>factories.find((x: any) => x.key === obj.component);
            let factory = componentFactoryResolver.resolveComponentFactory(factoryClass);
            let componentRef = host.createComponent(factory);
            (<CoreComponent>componentRef.instance).configModel = obj;
            (<CoreComponent>componentRef.instance).modelValue =  this.modelValue;
            (<CoreComponent>componentRef.instance).editorState =  this.editorState;
            (<CoreComponent>componentRef.instance).parent =  this;
        });
      }
    }
  }
}
