import { Component, OnInit } from '@angular/core';
import { PageStateService } from '../../components/core/services/state/page-state.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

    pageModel: any;
    editorState: any;
   
    constructor(private pageStateService: PageStateService) {
        this.pageModel = null;
    }

    ngOnInit() {
        this.pageStateService.GetPageModel()
               .subscribe(model => {
                   this.pageModel = model
                   console.log(model);
               });

        this.pageStateService.GetEditorState()
               .subscribe(model => {
                   this.editorState = model
               });               
    }

}
