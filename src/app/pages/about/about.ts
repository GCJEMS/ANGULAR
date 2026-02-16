import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  name = "James Andre Sinining";
  description = "I build modern and responsive web applications using Angular.";
}
