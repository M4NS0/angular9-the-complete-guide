import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer:  Renderer2) { }

  ngOnInit() {

    // better aproach //
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#337AB7');
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'borderRadius', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'inline-block');

  }
  

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#33aeb7');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }
}
