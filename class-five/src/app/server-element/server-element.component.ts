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
    console.log(this.counter + '- gOnChanges :: called only when there is an input to the component and everytime there is a change to it');
    console.log(changes);
  }

  ngOnInit(): void {
    this.counter += 1;
    console.log(this.counter + '- ngOnInit');
  }

  ngDoCheck() {
    this.counter += 1;
    console.log(this.counter + '- ngDoCheck :: whenever there is a change detection')
  }

  ngAfterContentInit() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterContentCheck :: called once after ngAfterContentInit() and everytime after ngDoCheck()');
  }

  ngAfterViewInit() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterViewInit');

  }
  ngAfterViewChecked() {
    this.counter += 1;
    console.log(this.counter + '- ngAfterViewChecked :: called once after ngAfterView() and everytime after ngDoCheck()');
    this.counter += 0; 
  }
  ngOnDestroy() {
    this.counter += 0; 


  }
}
