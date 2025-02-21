import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.css'
})
export class LoanComponent {

  loanAmount:number;
  rateOfInterest:number;
  tennure:number;

  constructor(){
    this.loanAmount=0;
    this.rateOfInterest=0;
    this.tennure=0;
  }
}
