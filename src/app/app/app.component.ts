import { Component, afterNextRender, inject } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "TEST123"

  // login(){
  //   inject(AuthService).login()
  //   //console.log("hello")
  // }
  
}

