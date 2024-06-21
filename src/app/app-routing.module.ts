import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { authGuard, authGuardChild } from './auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage'},
  { path: 'homepage', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent, canActivate: [authGuard], canActivateChild: [authGuardChild], children: [
    { path: ':id', component: ContattoComponent}
  ]},
  { path: '404', component: NotfoundComponent},
  { path: '**', redirectTo: '/404'}
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
