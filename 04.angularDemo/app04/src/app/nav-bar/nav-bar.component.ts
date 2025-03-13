import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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

  constructor(){
    this.title="UnTitled";
  }

}
