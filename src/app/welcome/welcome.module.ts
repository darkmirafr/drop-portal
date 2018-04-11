import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { WelcomeComponent }       from './welcome.component';
import { WelcomeRoutingModule }       from './welcome-routing.module';

@NgModule({
  imports: [ SharedModule, WelcomeRoutingModule],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
