import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas: Persona[]=[]
  constructor() { }

  getAllPersonas():Persona[]{
    let persona1 = new Persona("Juan", "Perez", 28)
    this.personas.push(persona1)
    this.personas.push (new Persona("Martin", "Sanchez", 55))
    this.personas.push (new Persona("Romina", "Gutierrez", 22))

    return this.personas
  }

  //solo un ejemplo de los servicios que se pueden ofrecer
  removePersona(persona:Persona):void{
    //TODO implement logic to remove a Persona
  }
}
