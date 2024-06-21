import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit, OnDestroy{
  id: number
  persona: any
  sottoscrizione: any

  constructor(private route: ActivatedRoute, private servizioProva: ServizioProvaService){}

  ngOnInit(): void {
    this.sottoscrizione = this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id = parseInt(params.get('id')!)
      this.persona = this.servizioProva.getPersona(this.id)
    })
  }

  ngOnDestroy(): void {
    this.sottoscrizione.unsubscribe()
  }


}
