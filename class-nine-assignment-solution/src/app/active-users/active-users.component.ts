import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  // not using anymore since the users.services have been implemented
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  users: string[];

  constructor (private userService: UsersService) {}


  ngOnInit ()  {
    this.users = this.userService.activeUsers;
  }


  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userService.setoToInactive(id);
  }
}
