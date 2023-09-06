import { Injectable } from '@angular/core';
import { Modo } from '../models/modo';
import { Tipo } from '../models/tipo';


@Injectable({
  providedIn: 'root'
})
export class PrecedentsService {
  getModo(): Modo[] {
    let modo = [
        new Modo('1', 'Estudio'),
        new Modo('2', 'Otros'),
    ]
    return modo;
}
  getTipo(): Tipo[] {
    let tipo = [
        new Tipo('1', 'Parcial'),
        new Tipo('2', 'Definativa'),
    ]
    return tipo;
}
  constructor() { }
}
