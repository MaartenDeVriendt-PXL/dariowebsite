import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbar,
    MatAnchor
  ],
  templateUrl: './navbar.component.html',
  standalone: true,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
