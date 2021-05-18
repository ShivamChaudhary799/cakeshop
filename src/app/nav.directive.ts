import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNav]'
})
export class NavDirective {
htmlelement: any;
  constructor(private navbar: ElementRef) { 
    this.htmlelement = this.navbar.nativeElement;
    this.htmlelement.style.color = "purple";
  }

}
