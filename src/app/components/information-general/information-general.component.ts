import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatCalendarCellClassFunction,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { Entidad } from 'src/app/models/entidad';
import { Institucion } from 'src/app/models/institucion';
import { Municipio } from 'src/app/models/municipio';
import { ApiService } from 'src/app/service/api/api.service';

@Component({
  selector: 'app-information-general',
  templateUrl: './information-general.component.html',
  styleUrls: ['./information-general.component.scss'],
})
export class InformationGeneralComponent implements OnInit {
  allMunicipio: Municipio[]=[];
  allEntidad: Entidad[]=[];

  SendDataonChange(event: any) {
    console.log(event.target.value);
  }
  selected = '1';

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getMunicipio().subscribe((response: any) => {
      this.allMunicipio = response;
    });
    this.api.getEntidad().subscribe((response: any) => {
      this.allEntidad = response;
    });
  }
  formInformation = new FormGroup({
    entidad: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    municipio: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    barrio: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.pattern('^[0-9]*$'),
    ]),
    ingreso: new FormControl('', [Validators.required]),
    dias: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });
  submit() {
    if (this.formInformation.valid) console.log('Todos los datos son válidos');
    else console.log('Hay datos inválidos en el formulario');
  }
}
