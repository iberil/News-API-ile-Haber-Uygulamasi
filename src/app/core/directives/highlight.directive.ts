import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.boxShadow = '0 0 11px rgba(33,33,33,.5)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = 'none';
  }
}
