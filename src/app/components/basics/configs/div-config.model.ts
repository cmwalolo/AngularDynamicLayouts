import { ComponentConfigModel } from '../../core/exports';
import { AnyTypeAnnotation } from 'babel-types';


export class DivConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public id: string,
        public label: string,
        public className:string,
        public children: any[]
      ) {  super(component, className, children); }
}
