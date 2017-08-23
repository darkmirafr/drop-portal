import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { PortalComponent }       from './portal.component';
import { PortalRoutingModule }   from './portal-routing.module';

@NgModule({
  imports: [ SharedModule, PortalRoutingModule ],
  declarations: [
    PortalComponent
  ]
})
export class PortalModule { }
