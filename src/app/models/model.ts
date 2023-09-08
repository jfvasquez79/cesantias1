import { Concepto } from './concepto';
export interface Factory {
  concepto?:String,
  valor?:number,
  factor?:number
}
export interface Precedents {
  fecha?:string,
  numero?:number,
  valor:number,
  tipo?:string,
  modo?:string,
  estado?:boolean,
}
export interface Settled {
  fecha?:string,
  numero?:number,
  valor?:number,
  tipo?:string,
  modo?:string,
  corte?:string,
  institucion?:string,
  clase?:string,
  otro?:string,
  funcionario?:string,
  cargo?:string,
  entidad?:string,
}
