import { Component, OnInit } from '@angular/core';

@Component({
  selector: `[app-servers]`,
  template: `<p>- Servers Component</p> <i style="margin-left: 20px"> This paragraph was written inside the servers.component.ts annotation's template attributes</i>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
