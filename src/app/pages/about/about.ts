import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
})
export class AboutComponent {
  name = 'James Andre Sinining';
  tagline = 'Developer focused on modern web applications.';
  description =
    'I build modern and responsive web applications using Angular and TypeScript, with a focus on clean code and great user experience.';
  email = 'your.email@example.com';
  location = 'Philippines';
  year = new Date().getFullYear();

  skills: string[] = [
    'Angular',
    'TypeScript',
    'HTML & CSS',
    'JavaScript',
    'PHP',
    'Git',
  ];

  focusItems: { title: string; text: string }[] = [
    { title: 'Modern web apps', text: 'Single-page applications and responsive interfaces.' },
    { title: 'Clean code', text: 'Maintainable, readable, and well-structured codebases.' },
    { title: 'User experience', text: 'Fast, accessible, and intuitive products.' },
  ];

  projects: { title: string; description: string }[] = [
    { title: 'Portfolio site', description: 'Modern Angular portfolio with responsive design.' },
    { title: 'Scholarship system', description: 'Online Scholarship Application System built with PHP.' },
    { title: 'Student dashboard', description: 'Dashboard with CRUD and reporting features.' },
  ];
}
