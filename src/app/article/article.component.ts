// Exact copy except import UserService from core
import { Component }   from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  templateUrl: './article.component.html'
})
export class ArticleComponent {

  constructor( private sanitizer: DomSanitizer) {

    
  }
  ngOnInit() {
    
  };

}
