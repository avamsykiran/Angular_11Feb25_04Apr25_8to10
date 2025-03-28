import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NoSuchComponent } from './no-such/no-such.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:"/contact"},
    {path:'contacts',component:ContactsListComponent},
    {path:'addContact',component:ContactFormComponent},
    {path:'editContact/:id',component:ContactFormComponent},
    {path:'**',component:NoSuchComponent}
];
