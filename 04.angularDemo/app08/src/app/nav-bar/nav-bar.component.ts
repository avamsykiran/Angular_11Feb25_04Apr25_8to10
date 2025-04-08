import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthStore } from '../services/auth.store';

interface NavLink{
  linkText:string;
  linkPath:string;
}

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Input()
  title:string;

  @Input()
  links!:NavLink[]

  auth = inject(AuthStore);

  constructor(){
    this.title="UnTitled";
  }

}
