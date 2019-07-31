import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreated: boolean = false;
  serverCreationStatus: string = 'No server has been created';
  serverName: string = 'Testserver';
  servers: string[] = ['Testserver', 'Testserver 2'];

  constructor() { }

  createNewServer() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! with name ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  ngOnInit() {
  }

}
