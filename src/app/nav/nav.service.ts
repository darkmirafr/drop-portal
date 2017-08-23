import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Menu } from './menu';

@Injectable()
export class NavService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getMenuLeft(): Promise<Menu[]> {
        return this.http.get(`assets/nav/menu-left.json`)
            .toPromise()
            .then(response => response.json() as Menu[]);
    }
}