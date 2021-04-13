import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
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

  constructor() {
    this.counter += 1;
    console.log(this.counter + '- constructor');
  }
  ngOnChanges(changes: SimpleChanges) {
    this.counter += 1;
    console.log(this.counter + '- gOnChanges:');
    console.log(changes);
  }
  
  ngOnInit(): void {
    this.counter += 1;
    console.log(this.counter + '- ngOnInit');
  }

  ngDoCheck() {
    this.counter += 1;
    console.log(this.counter + '- ngDoCheck')
  }

  ngAfterContentInit() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterContentCheck');
  }

  ngAfterViewInit() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterViewInit');

  }
  ngAfterViewChecked() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterViewChecked');
    
  }
  ngOnDestroy() {
    this.counter += 1;
    console.log(this.counter + ' - ngOnDestroy\n\n\n\n\n')    
  }
}
