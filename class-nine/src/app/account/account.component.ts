import { Component,  Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogginService, AccountsService]
  // providers: [LogginService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LogginService, 
    private accountsServices: AccountsService) {}

  onSetTo(status: string) {
    this.accountsServices.updateStatus(this.id, status); 
    // this.loggingService.logStatusChange(status);
  }
}
