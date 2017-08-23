import { NgModule, ModuleWithProviders  }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { AwesomePipe }         from './awesome.pipe';
import { HighlightDirective }  from './highlight.directive';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AwesomePipe, HighlightDirective ],
  exports:      [ AwesomePipe, HighlightDirective,
                  CommonModule, FormsModule,TranslateModule ]
})
export class SharedModule { 

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }

}
