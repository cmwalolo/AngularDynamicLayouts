import { ComponentConfigModel } from '../../core/dyn-core.module';
import { AnyTypeAnnotation } from 'babel-types';


export class DivConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public componentId:any,
        public label: string,
        public className:string,
        public children: any[]
      ) {  super(component, componentId, className, children); }
}
