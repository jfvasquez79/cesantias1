import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { Precedents } from 'src/app/models/model';
import { Modo } from 'src/app/models/modo';
import { Tipo } from 'src/app/models/tipo';
import { PrecedentsService } from 'src/app/service/precedents.service';

@Component({
  selector: 'app-precedents',
  templateUrl: './precedents.component.html',
  styleUrls: ['./precedents.component.scss']
})
export class PrecedentsComponent implements OnInit {
  allModo!: Modo[];
  allTipo!: Tipo[];
  formPrecedents: FormGroup;
  color: ThemePalette = 'primary';
    @Input() Precedentlist: Precedents[] = [
    {
      fecha:"2023-07-22",
      numero:60,
      valor:150000,
      tipo:"Parcial",
      modo:"Estudio"
    },
    {
      fecha:"2012-01-12",
      numero:91,
      valor:17732343,
      tipo:"Definativa",
      modo:"Otros"
    }
  ];

  constructor(private precedentsservice:PrecedentsService,private fb: FormBuilder) {
    this.formPrecedents = fb.group({
      fecha: new FormControl('', [Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      numero: new FormControl('', [Validators.required,   Validators.pattern("^[0-9]*$")]),
      valor: new FormControl('', [Validators.required,   Validators.pattern("^[0-9]*$")]),
      tipo: new FormControl('', [Validators.required]),
      modo: new FormControl('', [Validators.required]),
/*       estado: new FormControl('', [Validators.required])
 */    });
  }

  ngOnInit(): void {
    this.allModo = this.precedentsservice.getModo();
    this.allTipo = this.precedentsservice.getTipo();

  }
   submit(fData: any,formDirective: FormGroupDirective): void {

    console.log(this.formPrecedents.valid);
    if (this.formPrecedents.valid) {
      let precedents: Precedents = this.formPrecedents.value;
      this.addPrecedents(precedents);
      formDirective.resetForm();
      this.formPrecedents.reset();
    }
  }

  addPrecedents(precedents: Precedents) {
    this.Precedentlist.push(precedents);
  }
  onReset() {
    this.formPrecedents.reset({
      fecha:'',
      numero:'',
      valor:'',
      tipo:'',
      modo:''
    });

  }
}

