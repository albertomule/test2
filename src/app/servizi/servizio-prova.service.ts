import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {
  persone = [
    {nome: "luca", cognome: "rossi", isOnline: true, color: 'blue'},
    {nome: "marco", cognome: "verdi", isOnline: false, color: 'red'},
    {nome: "anna", cognome: "neri", isOnline: false, color: 'yellow'},
    {nome: "leonardo", cognome: "qwerty", isOnline: true, color: 'green'},
    {nome: "pannocchia", cognome: "babbo", isOnline: false, color: 'purple'},
  ]

  constructor() { }

  getPersone(){
    return this.persone
  }

  getPersona(index: number){
    return this.persone[index]
  }
}
