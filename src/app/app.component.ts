import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppComponent {
  title = 'jipt-in-angular';
  VAR_SELECT: string = 'PERSONAL';
  profile = {
    name: 'account',
    fullyFormattedID: '1234567890',
    balance: 1000,
  };

  buttonText = $localize`:@@showMessageButton:Show Message`;
  localizedMessage: string | null = null;

  ngOnInit() {
    var jiptConfig = document.createElement('script');
    jiptConfig.type = 'text/javascript';
    jiptConfig.text = `
      var _jipt = [];
      _jipt.push(['project', '7da6d433eda3c9aeb9f96faf75f71c90']);
      _jipt.push(['domain', 'beytok']);
      
      _jipt.push(['before_dom_insert', function(text, node, attribute) {
        return text.replace(/\\[%/g, '{').replace(/%\\]/g, '}');
      }]);
    `;

    document.head.appendChild(jiptConfig);

    var jiptScript = document.createElement('script');
    jiptScript.type = 'text/javascript';
    jiptScript.src = '//cdn.crowdin.com/jipt/jipt.js';

    document.head.appendChild(jiptScript);

    console.log('App component initialized');
  }

  showLocalizedMessage(): void {
    this.localizedMessage = $localize`:@@localizedMessage:This is a localized message shown after clicking the button.`;
  }
}
