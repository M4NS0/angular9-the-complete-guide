import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService, AccountsService]
  providers: [LogginService]
})
export class NewAccountComponent {

  constructor(private loggingService: LogginService, 
    private accountsServices: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsServices.addAccount(accountName,accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
