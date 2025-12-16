import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeUp } from '../../animations/fadeup.animation';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    fadeUp
  ]
})
export class HomeComponent {
  roles: string[] = [
    'Full Stack Developer',
    'Angular & Python Engineer',
    'AI & Backend Enthusiast'
  ];
  name: string = 'Alan Babu';

  activeRole: string = this.roles[0];

  constructor(private router: Router) {}

  onHireMe() {
    this.router.navigate(['/contact']);
  }

}
