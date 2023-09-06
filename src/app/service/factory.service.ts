import { Injectable } from '@angular/core';
import { Concepto } from '../models/concepto';


@Injectable({
  providedIn: 'root'
})
export class FactoryService {
  getConept(): Concepto[] {
    let concept = [
        new Concepto('1', 'Sueldo'),
        new Concepto('2', 'Sobresueldo 20%'),
        new Concepto('3', 'Auxilio Alimentacion')
    ]
    return concept;
}
  constructor() { }
}
