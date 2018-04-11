import { NgModule, ModuleWithProviders  }            from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [],
  exports:      [ CommonModule, FormsModule,
                  TranslateModule,NgbModule,
                  FilterPipeModule ]
})
export class SharedModule { 

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }

}
