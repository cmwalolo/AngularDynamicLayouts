import { ComponentConfigModel } from '../../core/exports';



export class InputConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public id: string,
        public name: string,
        public label: string,
        public mandatory: boolean,
        public mandatoryMessage: string,
        public validator: any[],
        public placeholder?: string,
      ) { super() }
}
