import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

  skills = [
    {
      title: 'Angular',
      image: 'images/angular.png',
      description: 'Building dynamic and scalable frontend applications.'
    },
    {
      title: 'NestJS',
      image: 'images/nestjs.png',
      description: 'Creating powerful backend APIs with modular architecture.'
    },
    {
      title: 'TypeScript',
      image: 'images/typescript.png',
      description: 'Writing clean and maintainable strongly-typed code.'
    },
    {
      title: 'REST APIs',
      image: 'images/api.png',
      description: 'Designing secure and scalable backend services.'
    },
    {
      title: 'Database',
      image: 'images/database.png',
      description: 'Working with MySQL and PostgreSQL.'
    },
    {
      title: 'UI/UX Design',
      image: 'images/uiux.png',
      description: 'Crafting modern interfaces using TailwindCSS.'
    }
  ];

}