import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // below, a property with a method:
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewReference.createEmbeddedView(this.templateRef);
    } else {
      this.viewReference.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewReference: ViewContainerRef) { }

}
