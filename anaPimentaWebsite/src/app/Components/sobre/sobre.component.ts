import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/linkedin.svg'))
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/facebook.svg'))
    this.matIconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/instagram.svg'))
    this.matIconRegistry.addSvgIcon('whatsap', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/whatsap.svg'))
    this.matIconRegistry.addSvgIcon('phone', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/phone.svg'))
  }

  navigateTo(link : string){
    window.open(link);
  }

}
