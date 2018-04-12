import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { WelcomeComponent }       from './welcome.component';
import { WelcomeRoutingModule }       from './welcome-routing.module';

@NgModule({
  imports: [ SharedModule, WelcomeRoutingModule],
  declarations: [
    WelcomeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WelcomeModule { }
