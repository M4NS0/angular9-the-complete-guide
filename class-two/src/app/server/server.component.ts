import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
    
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor () {
        // if (this.serverStatus === 'offline') {
        //     return '#F8D7DA'
        // } else return '#D4EDDA'
        return this.serverStatus === 'online' ? '#D4EDDA' : '#F8D7DA';
    }
}