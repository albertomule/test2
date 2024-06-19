import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from '../componenti/about/about.component';
import { ContactComponent } from '../componenti/contact/contact.component';



@NgModule({
  declarations: [AppComponent, AboutComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
