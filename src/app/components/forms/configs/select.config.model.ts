import { ComponentConfigModel } from '../../core/exports';


export class SelectConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public id: string,
        public name: string,
        public label: string,
        public mandatory: boolean,
        public mandatoryMessage: string,
        public validator: any[],
        public options: any[],
        public placeholder?: string,
      ) {  super() }
}
