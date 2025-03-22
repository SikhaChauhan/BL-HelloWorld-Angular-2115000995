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
  errorMessage: string = '';

  validateInput(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;

    if (!this.userName.match(namePattern)) {
      this.errorMessage =
        'Invalid name! It should start with a capital letter and be at least 3 characters long.';
    } else {
      this.errorMessage = '';
    }
  }
}
