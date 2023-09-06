import { Concepto } from './concepto';
export interface Factory {
  concepto?:String,
  valor?:number,
  factor?:number
}
export interface Precedents {
  fecha?:string,
  numero?:number,
  valor?:number,
  tipo?:string,
  modo?:string,
  estado?:boolean,
}
