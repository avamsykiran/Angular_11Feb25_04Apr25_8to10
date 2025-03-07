import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoanComponent } from './loan/loan.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:"/welcome"},
    {path:'welcome',component:WelcomeComponent},
    {path:'loan',component:LoanComponent},
    {path:'friends',component:FriendsListComponent},
    {path:'pd',component:PipesDemoComponent}
];
