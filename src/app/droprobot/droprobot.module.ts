import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

import { DroprobotComponent }       from './droprobot.component';
import { DroprobotRoutingModule }       from './droprobot-routing.module';

@NgModule({
  imports: [ SharedModule, DroprobotRoutingModule, ChartsModule],
  declarations: [
    DroprobotComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DroprobotModule { }
