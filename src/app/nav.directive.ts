import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNav]'
})
export class NavDirective {
htmlelement: any;
  constructor(private navbar: ElementRef) { 
    // Giving colour to navigation bar
    this.htmlelement = this.navbar.nativeElement;
    this.htmlelement.style.color = "purple";
  }

}
