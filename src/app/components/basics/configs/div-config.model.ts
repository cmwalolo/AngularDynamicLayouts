import { ComponentConfigModel } from '../../core/exports';


export class DivConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public id: string,
        public label: string,
        public className: string,
        public children: any[]
      ) {  super() }
}
