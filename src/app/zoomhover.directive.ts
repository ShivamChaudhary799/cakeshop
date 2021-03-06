import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomhover]'
})
export class ZoomhoverDirective {
  htmlelement: any;
  constructor(private element: ElementRef) {
    this.htmlelement = this.element.nativeElement;
   }

// Giving hovering style to cake images

   @HostListener('mouseenter') out(){
    this.htmlelement.style.transform = "scale(1.1)";
    this.htmlelement.style.boxShadow = "5px 10px 10px pink";
  }
  @HostListener('mouseleave') in(){
    this.htmlelement.style.transform = "scale(1)";
    this.htmlelement.style.boxShadow = "";
  }
}
