import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/coinflow/login', pathMatch: 'full'},
    { path: 'coinflow', loadChildren:()=> import('./coninflow/coninflow.module').then(m=> m.ConinflowModule)},
    { path: '**', redirectTo: '/coinflow/login' }
];
