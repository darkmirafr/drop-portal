// Exact copy except import UserService from core
import { Component }   from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  templateUrl: './droprobot.component.html'
})
export class DroprobotComponent {
  baseUrl: string = 'https://www.youtube.com/embed/';
  sCurrentVideo;
  constructor( private sanitizer: DomSanitizer) {
    this.sCurrentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl+'-546aj22nOM');
    
  }
  ngOnInit() {
    
  };

}
