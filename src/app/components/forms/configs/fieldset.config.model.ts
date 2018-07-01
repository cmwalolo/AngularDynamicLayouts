import { ComponentConfigModel } from '../../core/dyn-core.module';

export class FieldsetConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public componentId: any,
        public label: string,
        public className: string,
        public children: any[]
      ) {  super(component, componentId, null, children) }
}
