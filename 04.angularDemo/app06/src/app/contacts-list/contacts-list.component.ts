import { Component, computed, Signal } from '@angular/core';
import { Contact } from '../models/contact';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectContacts, selectErrMsg } from '../state/contacts.selectors';
import { ContactActions } from '../state/contacts.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts-list',
  imports: [RouterLink, CommonModule],
  standalone:true,
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {
  contacts$ : Observable<Contact[]>;
  errMsg$ : Observable<string|null>;

  constructor(private store:Store){
    this.contacts$ = store.select(selectContacts);
    this.errMsg$ = store.select(selectErrMsg);
  }

  ngOnInit(){
    this.store.dispatch(ContactActions.load());
  }
  
  del(id:number){
    this.store.dispatch(ContactActions.delete({id}));
  }
}
