import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<app-server></app-server><p> is inside the annotation's template attributes</p>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
