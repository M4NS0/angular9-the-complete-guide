import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input(`srvElement`) element: { type: string, name: string, content: string };
  @Input() name: string;
  counter = 0;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() { 
    console.log("Debugging Lifecycle Hooks: \n");
    this.counter += 1;
    console.log(this.counter + '- constructor\n');

  }
  ngOnChanges(changes: SimpleChanges) {
    this.counter += 1;
    console.log(this.counter + '- gOnChanges :: Called after a bound input property changes');
    console.log(changes);
  }

  ngOnInit(): void {
    this.counter += 1;
    console.log(this.counter + '- ngOnInit :: Called once the component is initialized');
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);  
  }

  ngDoCheck() {
    this.counter += 1;
    console.log(this.counter + '- ngDoCheck :: Called during every change detection run')
  }

  ngAfterContentInit() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterContentInit :: Called after content (ng-content) has been projected into view');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterContentCheck :: Called every time the projected content has been checked');
  }

  ngAfterViewInit() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterViewInit :: Called after the component’s view (and child views) has been initialized');
    console.log("Text Content: " + this.header.nativeElement.textContent);

  }
  ngAfterViewChecked() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterViewChecked :: Called every time the view (and child views) have been checked');
    this.counter += 0; 
  }
  ngOnDestroy() {
    this.counter += 0; 
    console.log(this.counter + '- ngOnDestroy :: Called once the component is about to be destroyed');


  }
}
