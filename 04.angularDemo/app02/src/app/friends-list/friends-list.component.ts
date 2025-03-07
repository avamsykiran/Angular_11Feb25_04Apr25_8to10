import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [ FormsModule ],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.css'
})
export class FriendsListComponent {

  friends:string[];
  friendName!:string;

  constructor(){
    this.friends=["Vamsy","Murthy","Suresh"];
  }

  del(index:number){    
    if(index>-1 && index<this.friends.length){
      this.friends.splice(index,1);
    }
  }

  add(){
    if(this.friendName && this.friendName.trim().length>0){
      this.friends.push(this.friendName);
      this.friendName="";
    }
  }
}
