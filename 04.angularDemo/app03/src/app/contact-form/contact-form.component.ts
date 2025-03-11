import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactsService } from '../services/contacts.service';
import { Router } from '@angular/router';

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

  constructor(private cs:ContactsService,private router:Router){

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
      this.contactForm.reset(this.cs.getContactById(Number(this.id)));
      this.isEditing=true;
    }
  }

  formSubmitted(){
    if(this.isEditing){
      this.cs.replaceContact(this.contactForm.value);
    }else{
      this.cs.addContact(this.contactForm.value);
    }
    this.router.navigateByUrl("/contacts");
  }

}
