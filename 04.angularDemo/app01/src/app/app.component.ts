import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoanComponent } from './loan/loan.component';

@Component({
  selector: 'app-root',
  imports:[ WelcomeComponent, LoanComponent ],
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string;

  constructor(){
    this.title="My First Angular App";
  }
}
