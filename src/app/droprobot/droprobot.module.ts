import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { DroprobotComponent }       from './droprobot.component';
import { DroprobotRoutingModule }       from './droprobot-routing.module';

@NgModule({
  imports: [ SharedModule, DroprobotRoutingModule],
  declarations: [
    DroprobotComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DroprobotModule { }
