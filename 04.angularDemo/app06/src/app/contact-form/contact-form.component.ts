import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ContactActions } from '../state/contacts.actions';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { selectContacts } from '../state/contacts.selectors';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  @Input()
  id!:string;

  isEditing!:boolean;

  contactForm: FormGroup;
  idFC:FormControl;
  fullNameFC:FormControl;
  mobileFC:FormControl;
  mailFC:FormControl;

  contacts$:Observable<Contact[]>;

  constructor(private store:Store,private router:Router){

    this.contacts$ = this.store.select(selectContacts);

    this.idFC = new FormControl(0,[Validators.required]);
    this.fullNameFC= new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]);
    this.mobileFC=new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]{9}")]);
    this.mailFC=new FormControl("",[Validators.required,Validators.email]);

    this.contactForm = new FormGroup({
      id:this.idFC,
      fullName:this.fullNameFC,
      mail:this.mailFC,
      mobile:this.mobileFC
    });
  }

  ngOnChanges(){
    if(this.id){
      this.contacts$.subscribe({
        next: contacts => {
          let c = contacts.find(cx => cx.id===Number(this.id));
          this.contactForm.reset(c);
          this.isEditing=true;
        }
      })
    }
  }

  formSubmitted(){
    if(this.isEditing){
      this.store.dispatch(ContactActions.update(this.contactForm.value));      
    }else{
      this.store.dispatch(ContactActions.add(this.contactForm.value));
    }
    this.router.navigateByUrl("/contacts");
  }

}
