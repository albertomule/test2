import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLoggedIn = true
  isAdmin = true

  constructor() { }

  isAuthenticated(){
    return this.isLoggedIn
  }

  isRoleAdmin(){
    return this.isAdmin
  }

  // login(){
  //   this.isLoggedIn = true
  // }

  // loginAdmin(){
  //   this.isAdmin = true
  // }

  // logout(){
  //   this.isLoggedIn = false
  //   this.isAdmin = false
  // }

  
}
