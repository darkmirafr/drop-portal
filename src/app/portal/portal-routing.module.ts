import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { PortalComponent }       from './portal.component';

const routes: Routes = [
  { path: 'portal',
    component: PortalComponent,
    children: [
      { path: '',    component: PortalComponent, data: {theme:"portal"} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {}
