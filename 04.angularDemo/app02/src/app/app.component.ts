import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports:[ RouterOutlet,RouterLink,RouterLinkActive ],
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;

  constructor(){
    this.title="Angular SPA 2.0";
  }
}
