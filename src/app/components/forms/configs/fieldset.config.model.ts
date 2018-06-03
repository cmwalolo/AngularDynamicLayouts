import { ComponentConfigModel } from '../../core/exports';

export class FieldsetConfigModel extends ComponentConfigModel {
    constructor(
        public component: any,
        public id: string,
        public label: string,
        public children: any[]
      ) {  super() }
}
