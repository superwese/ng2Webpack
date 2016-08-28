import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string;
    constructor() {
        this.title = 'Hello with Webpack';
    }
}