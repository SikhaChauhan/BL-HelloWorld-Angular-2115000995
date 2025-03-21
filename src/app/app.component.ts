import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  logoUrl: string = 'assets/Logo.png';
  bridgeLabzUrl: string = 'https://www.bridgelabz.com';
  userName: string = '';

  openBridgeLabz(): void {
    window.open(this.bridgeLabzUrl, '_blank');
  }
}
