import { Injectable } from "@angular/core";
import { LogginService } from "./logging.service";

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      constructor (private logginServices: LogginService) {}
      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status})
        this.logginServices.logStatusChange(status);
      }

      updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.logginServices.logStatusChange(status);

      }

}