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
    this.matIconRegistry.addSvgIcon('empathy', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/empathy.svg'))
    this.matIconRegistry.addSvgIcon('excelency', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/excelency.svg'))
    this.matIconRegistry.addSvgIcon('respect', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/respect.svg'))
    this.matIconRegistry.addSvgIcon('check', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/check.svg'))
    this.matIconRegistry.addSvgIcon('x', this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/svg/x.svg'))
  }

  navigateTo(link : string){
    window.open(link);
  }

}
