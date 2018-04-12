// Exact copy except import UserService from core
import { Component }   from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  baseUrl: string = 'https://www.youtube.com/embed/';
  sCurrentVideo;
  constructor( private sanitizer: DomSanitizer) {
    this.sCurrentVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl);
  }
}
