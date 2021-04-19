import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = '#337AB7';
        this.elementRef.nativeElement.style.color = 'white';
        this.elementRef.nativeElement.style.padding = '5px'
    }
}