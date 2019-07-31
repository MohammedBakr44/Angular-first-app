import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: string = '';
  numberOfChars: number = 6;
  characters: string[] = ['a', 'b', 'c', 'A', 'B', 'C', '@', '!', '$', '1', '2', '3', '4'];
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  setServerId(): string {
    let i = 0;
    let serverId: string = '';
    while (i < this.numberOfChars) {
      serverId += this.characters[Math.floor(Math.random() * (this.characters.length - 0))];
      i++;
    }
    return serverId;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
