import { Component, OnInit } from '@angular/core';
import { InputConfigModel, SelectConfigModel, FieldsetConfigModel, FormConfigModel,  DynFormComponent } from '../../components/dyn-core.module';
import { InputComponent, FieldsetComponent, SelectComponent} from '../../components/dyn-core.module';
import { DivConfigModel, DivComponent, PageConfigModel, PageHeaderComponent } from '../../components/dyn-core.module';

import { Model} from '../../models/model';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    model = new Model(18, 'Dr IQ', '50', 'Chuck Overstreet');
    configModel = 

    new DivConfigModel("DivComponent", "main", "", "main-container",
        [   new PageConfigModel("PageHeaderComponent", "Sample form", "fa-form", null),
            new FormConfigModel("DynFormComponent", "myForm", 
            [
                new DivConfigModel("DivComponent", "","", "row",
                [
                    new DivConfigModel("DivComponent", "", "", "col-md-6",      
                                [
                                    new InputConfigModel("InputComponent", "name", "name", "Name", true, "Name is mandatory", null, "Enter your full name"),
                                    new InputConfigModel("InputComponent", "alterego", "alterEgo", "Alter Ego", true, "Alter ego is mandatory", null,"Alter Ego")
                                ]),
                    new DivConfigModel("DivComponent", "", "", "col-md-6",      
                            [
                                new SelectConfigModel("SelectComponent", "alterego", "alterEgo", "Alter Ego", true, "Alter ego is mandatory", null, null, "Alter Ego")
                            ]) 
                ]
            )])
    ]);

    
    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'First slide label',
                text:
                    'Nulla vitae elit libero, a pharetra augue mollis interdum.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Second slide label',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Third slide label',
                text:
                    'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
