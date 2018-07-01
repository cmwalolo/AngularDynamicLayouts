import { Component, OnInit } from '@angular/core';
import { PageStateService } from '../components/core/services/state/page-state.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor(private pageStateService: PageStateService) {}

    ngOnInit() {
       this.pageStateService.GetPageModel()
               .subscribe(model => {
                   console.log(model);
               });       
    }
}
