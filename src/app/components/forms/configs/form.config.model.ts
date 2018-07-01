import { ComponentConfigModel } from '../../core/dyn-core.module';


export class FormConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public componentId:any, 
        public id: string,
        public children: any[]
      ) {  super(component, componentId, null, children) }
}
