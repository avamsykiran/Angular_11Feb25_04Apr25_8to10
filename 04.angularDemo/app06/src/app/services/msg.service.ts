import { Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  private msg:WritableSignal<string | null>;
  constructor() { 
    this.msg = signal(null);
  }

  getMsg():Signal<string | null>{
    return this.msg.asReadonly();
  }

  setMsg(msg:string){
    this.msg.set(msg);
  }

  clearMsg(){
    this.msg.set(null);
  }
}
