import { Component, computed, inject, Signal } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';
import { RouterLink } from '@angular/router';
import { MsgBoxComponent } from '../msg-box/msg-box.component';
import { ContactsStore } from '../services/contacts.store';

@Component({
  selector: 'app-contacts-list',
  imports: [RouterLink, MsgBoxComponent],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {

  store = inject(ContactsStore);

  ngOnInit(){
    this.store.loadAll();
  }

  del(id:number){
    this.store.del(id);    
  }
}
