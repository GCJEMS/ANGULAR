import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = 'James Andre Sinining';
  email = 'Jamesandreduazo@gmail.com';
  location = 'Cebu City,Philippines';
  year = new Date().getFullYear();
  availability = 'Open for new projects and collaboration.';
  responseTime = 'I usually reply within 24–48 hours.';

  get mailtoUrl(): string {
    const subject = encodeURIComponent('Hello from JAS-APP');
    const body = encodeURIComponent(
      "Hi James Andre,\n\nI'd like to get in touch regarding..."
    );
    return `mailto:${this.email}?subject=${subject}&body=${body}`;
  }

  get contactItems(): { label: string; value: string; type: 'email' | 'text' }[] {
    return [
      { label: 'Email', value: this.email, type: 'email' },
      { label: 'Location', value: this.location, type: 'text' },
      { label: 'Availability', value: this.availability, type: 'text' },
    ];
  }
}
