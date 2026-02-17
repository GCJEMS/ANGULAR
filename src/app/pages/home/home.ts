import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements AfterViewInit {
  name = 'JAMES ANDRE SININING';
  description =
    'I build modern and responsive web applications using Angular and TypeScript.';
  email = 'your.email@example.com';
  location = 'Philippines';
  year = new Date().getFullYear();

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.scrollToFragment());
    setTimeout(() => this.scrollToFragment(), 100);
  }

  private scrollToFragment(): void {
    const fragment = this.router.parseUrl(this.router.url).fragment;
    const el = fragment ? document.getElementById(fragment) : null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
