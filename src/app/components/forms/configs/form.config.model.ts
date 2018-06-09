import { ComponentConfigModel } from '../../core/exports';


export class FormConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public id: string,
        public children: any[]
      ) {  super(component, null, children) }
}
