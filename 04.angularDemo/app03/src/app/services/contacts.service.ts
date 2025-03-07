import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts:Contact[];
  private nextId:number;

  constructor() { 
    this.contacts=[
      {id:1,fullName:"Vamsy",mobile:"9999999999",mail:"vamsy@gmail.com"},
      {id:2,fullName:"Kiran",mobile:"8888888888",mail:"kiran@gmail.com"}
    ];
    this.nextId=3;
  }

  getAllContacts() : Contact[] {
    return [...this.contacts];
  }

  getContactById(id:number):Contact | undefined {
    return this.contacts.find(c => c.id===id);
  }

  addContact(c:Contact):Contact {
    c.id = this.nextId++;
    this.contacts.push(c);
    return c;
  }

  replaceContact(c:Contact) : Contact {
    let index = this.contacts.findIndex(cx => cx.id ===c.id);

    if(index===-1){
      throw new Error("No Such Contact Exists");
    }

    this.contacts[index]=c;
    return c;
  }

  removeContactById(id:number) : void {
    let index = this.contacts.findIndex(cx => cx.id ===id);

    if(index===-1){
      throw new Error("No Such Contact Exists");
    }

    this.contacts.splice(index,1);    
  }
}
