import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  private apiUrl:string;  

  constructor(private httpClient:HttpClient) { 
    this.apiUrl=environment.apiBaseUrl +  "/contacts";
  }
  
  getAllContacts() : Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.apiUrl);
  }

  getContactById(id:number):Observable<Contact>  {
    return this.httpClient.get<Contact>(this.apiUrl + "/" +id);
  }

  addContact(c:Contact) : Observable<Contact> {    
    return this.httpClient.post<Contact>(this.apiUrl,c);
  }

  replaceContact(c:Contact) : Observable<Contact> {        
    return this.httpClient.put<Contact>(this.apiUrl +"/"+ c.id,c);
  }

  removeContactById(id:number) : Observable<void> {    
    return this.httpClient.delete<void>(this.apiUrl +"/"+ id);    
  }
}
