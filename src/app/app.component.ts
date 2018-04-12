import { Component } from '@angular/core';
import { TranslateService} from '@ngx-translate/core';

import { Injectable } from '@angular/core';
import { Router, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Drop-Portal';
  theme;
  sub: Subscription;
  constructor(private translate: TranslateService,private router: Router) {
        
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('fr');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('fr');

        this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(_ => this.router.routerState.root)
      .map(route => {
        while (route.firstChild) route = route.firstChild;;
        return route;
      })
      .flatMap(route => route.data)
      .subscribe(data => {
        this.theme = data.theme || 'default';
      });
  }
}
