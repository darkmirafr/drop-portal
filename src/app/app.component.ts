import {Component, OnInit} from '@angular/core';

declare var ab: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    ab: any;
    title = 'app';

    constructor() {
    }

    ngOnInit() {
        ab.connect('ws://0.0.0.0:8482',
            session => {
                console.log('connected.');
                console.log('subscribing topics...');

                session.subscribe('race', function (topic, event) {
                    console.log('race event received', topic, event);
                });

                session.subscribe('player-error', function (topic, event) {
                    console.log('player-error event received', topic, event);
                });
            },
            (code, reason, detail) => {
                console.warn(code, reason, detail);
            });

    }


}
