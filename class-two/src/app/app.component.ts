import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: dodgerblue;
    font-weight: 800;
  }`]
})
export class AppComponent {
  title = 'test';
}
