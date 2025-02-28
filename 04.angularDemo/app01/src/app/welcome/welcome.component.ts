import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  userName:string;
  banners:string[];
  bWidth:number;
  bIndex:number;
  bClasses:any;

  constructor(){
    this.userName="Somebody";
    this.banners = [
      "images/w1.jpg",
      "images/w2.jpg",
      "images/w3.jpg"
    ];
    this.bWidth=300;
    this.bIndex=0;
    this.bClasses = {
      centered:true,
      bordered:true
    };
  }

  changeIndex() {
    this.bIndex++;
    if(this.bIndex===this.banners.length){
      this.bIndex=0;
    }
  }
}
