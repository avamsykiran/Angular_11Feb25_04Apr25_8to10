import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntoWordsPipe } from '../into-words.pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule,IntoWordsPipe],  
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {

  str:string;
  num:number;
  dt:Date;

  constructor(){
    this.str="this Is a String";
    this.num = 12.264;
    this.dt=new Date();
  }
}
