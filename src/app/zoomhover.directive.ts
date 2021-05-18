import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomhover]'
})
export class ZoomhoverDirective {
  htmlelement: any;
  constructor(private element: ElementRef) {
    this.htmlelement = this.element.nativeElement;
   }

   @HostListener('mouseenter') out(){
    this.htmlelement.style.transform = "scale(1.1)";
    this.htmlelement.style.boxShadow = "5px 10px 10px blue";
  }
  @HostListener('mouseleave') in(){
    this.htmlelement.style.transform = "scale(1)";
    this.htmlelement.style.boxShadow = "";
  }
}
