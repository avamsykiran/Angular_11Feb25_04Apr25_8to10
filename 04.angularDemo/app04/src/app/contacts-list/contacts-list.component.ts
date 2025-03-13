import { Component, computed, Signal } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  imports: [RouterLink],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  contacts:Signal<Contact[]>;
  isEmpty:Signal<boolean>;

  constructor(private cs:ContactsService){
    this.contacts=this.cs.getAllContacts();
    this.isEmpty=computed( () => !this.contacts() || this.contacts().length===0 );
  }

  del(id:number){
    this.cs.removeContactById(id);    
  }
}
