import { ComponentConfigModel } from '../../core/dyn-core.module';



export class InputConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public componentId: any,
        public name: string,
        public label: string,
        public mandatory: boolean,
        public mandatoryMessage: string,
        public validator: any[],
        public placeholder?: string,
      ) { super(component, componentId, null, null) }
}
