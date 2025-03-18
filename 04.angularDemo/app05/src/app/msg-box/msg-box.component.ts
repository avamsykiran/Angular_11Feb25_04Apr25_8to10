import { Component, Signal } from '@angular/core';
import { MsgService } from '../services/msg.service';

@Component({
  selector: 'app-msg-box',
  imports: [],
  templateUrl: './msg-box.component.html',
  styleUrl: './msg-box.component.css'
})
export class MsgBoxComponent {

  msg:Signal<string|null>;

  constructor(private msgService:MsgService){
    this.msg = msgService.getMsg();
  }

  close(){
    this.msgService.clearMsg();
  }
}
