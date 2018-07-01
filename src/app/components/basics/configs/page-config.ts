import { LinkModel, ComponentConfigModel } from "../../core/dyn-core.module";

export class PageConfigModel extends ComponentConfigModel  {

    constructor(
        public component: any,
        public componentId: any,
        public header: string, 
        public icon: string, 
        public links: LinkModel[],
      ) {  super(component, componentId, null, null) }
}
