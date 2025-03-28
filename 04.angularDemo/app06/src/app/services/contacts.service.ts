import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { MsgService } from './msg.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts:WritableSignal<Contact[]>;
  private apiUrl:string;  

  constructor(private httpClient:HttpClient,private msgService:MsgService) { 
    this.contacts=signal([]);    
    this.apiUrl=environment.apiBaseUrl +  "/contacts";
  }

  loadData(){
    this.msgService.setMsg("Please wait while loading...!");
    this.httpClient.get<Contact[]>(this.apiUrl).subscribe({
      next: data => {
        this.contacts.set(data);
        this.msgService.clearMsg();
      },
      error: err => {
        console.error(err);
        this.msgService.setMsg("Failed to load data! Please retry later!");
      }
    });
  }

  getAllContacts() : Signal<Contact[]> {
    return this.contacts.asReadonly();
  }

  getContactById(id:number):Contact | undefined {
    return this.contacts().find(c => c.id===id);
  }

  addContact(c:Contact) {
    this.msgService.setMsg("Please wait while saving...!");
    this.httpClient.post<Contact>(this.apiUrl,c).subscribe({
      next: data => {
        this.contacts.update(ctx => [...ctx,data]);
        this.msgService.setMsg("Contact saved!");
      },
      error: err => {
        console.error(err);
        this.msgService.setMsg("Failed to save data! Please retry later!");
      }
    });    
  }

  replaceContact(c:Contact) {    
    this.msgService.setMsg("Please wait while saving...!");
    this.httpClient.put<Contact>(this.apiUrl +"/"+ c.id,c).subscribe({
      next: data => {
        this.contacts.update(ctx => ctx.map( cx => cx.id===data.id?data:cx));
        this.msgService.setMsg("Contact saved!");
      },
      error: err => {
        console.error(err);
        this.msgService.setMsg("Failed to save data! Please retry later!");
      }
    });        
  }

  removeContactById(id:number) : void {
    this.msgService.setMsg("Please wait while removing...!");
    this.httpClient.delete<void>(this.apiUrl +"/"+ id).subscribe({
      next: () => {
        this.contacts.update(ctx => ctx.filter( cx => cx.id!==id));    
        this.msgService.setMsg("Contact removed!");
      },
      error: err => {
        console.error(err);
        this.msgService.setMsg("Failed to remove data! Please retry later!");
      }
    });    
  }
}
