import { NgModule }     from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import { WelcomeComponent }       from './welcome.component';

const routes: Routes = [
  { path: '',
    component: WelcomeComponent,
    children: [
      { path: '',    component: WelcomeComponent, data: {theme:"default"} }
    ]
  },
  { path: 'welcome',
    component: WelcomeComponent,
    children: [
      { path: '',    component: WelcomeComponent, data: {theme:"default"} }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}
