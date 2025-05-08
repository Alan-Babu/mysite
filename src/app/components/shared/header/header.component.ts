import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false; // Track the state of the menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu state
  }

}
