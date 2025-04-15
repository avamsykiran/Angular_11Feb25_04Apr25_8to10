import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NoSuchComponent } from './no-such/no-such.component';
import { LoginComponent } from './login/login.component';
import { allowAuthenticatedUsersOnlyGuardGuard } from './guards/allow-authenticated-users-only-guard.guard';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:"/contacts"},
    {path:'contacts',component:ContactsListComponent},
    {path:'addContact',component:ContactFormComponent, canActivate:[allowAuthenticatedUsersOnlyGuardGuard]},
    {path:'editContact/:id',component:ContactFormComponent, canActivate:[allowAuthenticatedUsersOnlyGuardGuard]},
    {path:'login',component:LoginComponent},
    {path:'**',component:NoSuchComponent}
];
