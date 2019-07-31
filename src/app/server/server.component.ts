import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  setServerStatus(st: string): string {
    return st;
  }

  setServerId(id: string): string {
    return id;
  }
}
