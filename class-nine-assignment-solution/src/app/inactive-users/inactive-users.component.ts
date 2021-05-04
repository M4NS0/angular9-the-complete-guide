import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.services';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  // not using anymore since the users.services have been implemented
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  
  users: string[];

  constructor (private userService: UsersService) {}


  ngOnInit ()  {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userService.setToActive(id);
  }

}
