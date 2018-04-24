import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { ArticleComponent }       from './article.component';
import { ArticleRoutingModule }       from './article-routing.module';

@NgModule({
  imports: [ SharedModule, ArticleRoutingModule],
  declarations: [
    ArticleComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ArticleModule { }
