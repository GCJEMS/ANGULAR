import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, // import Navbar here
    RouterOutlet
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  name = 'JAMES ANDRE SININING';
}
