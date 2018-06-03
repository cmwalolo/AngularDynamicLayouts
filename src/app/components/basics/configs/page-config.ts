import { LinkModel, ComponentConfigModel } from "../../core/exports";

export class PageConfigModel extends ComponentConfigModel  {

    constructor(
        public component: any,
        public header: string, 
        public icon: string, 
        public links: LinkModel[],
      ) {  super() }
}
