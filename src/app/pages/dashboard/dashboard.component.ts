import { Component, OnInit } from '@angular/core';
import { Model} from '../../models/model';
import { DivConfigModel, PageConfigModel } from '../../components/basics/dyn-bascis.module';
import { FormConfigModel, InputConfigModel, SelectConfigModel } from '../../components/forms/configs/exports';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    model = new Model(18, 'Dr IQ', '50', 'Chuck Overstreet');
    id = 1; 
    configModel = 

    new DivConfigModel("DivComponent", this.id++,  "", "main-container",
        [   new PageConfigModel("PageHeaderComponent", this.id++, "Dashboard", "fa-dashboard", null),
            new FormConfigModel("DynFormComponent", this.id++, "myForm", 
            [
                new DivConfigModel("DivComponent",this.id++,"", "row",
                [
                    new DivConfigModel("DivComponent", this.id++, "", "col-md-6",      
                                [
                                    new InputConfigModel("InputComponent", this.id++, "name", "Name", true, "Name is mandatory", null, "Enter your full name"),
                                    new InputConfigModel("InputComponent", this.id++, "alterEgo", "Alter Ego", true, "Alter ego is mandatory", null,"Alter Ego")
                                ]),
                    new DivConfigModel("DivComponent", this.id++, "", "col-md-6",      
                            [
                                new SelectConfigModel("SelectComponent", this.id++,  "alterEgo", "Alter Ego", true, "Alter ego is mandatory", null, null, "Alter Ego")
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
