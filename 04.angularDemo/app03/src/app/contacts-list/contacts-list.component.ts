import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  imports: [],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  contacts:Contact[];

  constructor(private cs:ContactsService){
    this.contacts=this.cs.getAllContacts();
  }

  del(id:number){
    this.cs.removeContactById(id);
    this.contacts=this.cs.getAllContacts();
  }
}
