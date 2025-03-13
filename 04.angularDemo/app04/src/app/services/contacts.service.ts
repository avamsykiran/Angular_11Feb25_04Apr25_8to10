import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts:WritableSignal<Contact[]>;
  private nextId:number;

  constructor() { 
    this.contacts=signal([
      {id:1,fullName:"Vamsy",mobile:"9999999999",mail:"vamsy@gmail.com"},
      {id:2,fullName:"Kiran",mobile:"8888888888",mail:"kiran@gmail.com"}
    ]);
    this.nextId=3;
  }

  getAllContacts() : Signal<Contact[]> {
    return this.contacts.asReadonly();
  }

  getContactById(id:number):Contact | undefined {
    return this.contacts().find(c => c.id===id);
  }

  addContact(c:Contact):Contact {
    c.id = this.nextId++;
    this.contacts.update( ctx => [...ctx,c] );
    return c;
  }

  replaceContact(c:Contact) : Contact {    
    this.contacts.update(ctx => ctx.map( cx => cx.id===c.id?c:cx));
    return c;
  }

  removeContactById(id:number) : void {
    this.contacts.update(ctx => ctx.filter( cx => cx.id!==id));
  }
}
