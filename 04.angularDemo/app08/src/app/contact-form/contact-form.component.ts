import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsStore } from '../services/contacts.store';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  store = inject(ContactsStore);

  @Input()
  id!:string;

  isEditing!:boolean;

  contactForm: FormGroup;
  idFC:FormControl;
  fullNameFC:FormControl;
  mobileFC:FormControl;
  mailFC:FormControl;

  constructor(private router:Router){

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
      this.store.selectContactId(Number(this.id));
      this.contactForm.reset({...this.store.selectedContact()});
      this.isEditing=true;
    }
  }

  formSubmitted(){
    let p:Promise<void> = this.isEditing ? 
      this.store.update(this.contactForm.value) : 
      this.store.add(this.contactForm.value) ;
    
    p.then(
      () => this.router.navigateByUrl("/contacts")
    );    
  }

  /*
  async formSubmitted(){
    if(this.isEditing){
      await this.store.update(this.contactForm.value);
    } else{
      await this.store.add(this.contactForm.value);
    }
    
    this.router.navigateByUrl("/contacts");    
  }
 */
}
