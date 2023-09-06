import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatCalendarCellClassFunction,
  MatDatepickerModule,
} from '@angular/material/datepicker';

@Component({
  selector: 'app-information-general',
  templateUrl: './information-general.component.html',
  styleUrls: ['./information-general.component.scss'],
})
export class InformationGeneralComponent implements OnInit {
  SendDataonChange(event: any) {
    console.log(event.target.value);
    }
    selected='1';
  ngOnInit(): void {}
  formInformation = new FormGroup({
    entidad: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    municipio: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [
      Validators.required,
    ]),
    barrio: new FormControl('', [
      Validators.required,
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.maxLength(10), Validators.pattern("^[0-9]*$")
    ]),
    ingreso: new FormControl('', [
      Validators.required    ]),
    dias: new FormControl('', [Validators.required,   Validators.pattern("^[0-9]*$")]),
  });
  submit() {
    if (this.formInformation.valid) console.log('Todos los datos son válidos');
    else console.log('Hay datos inválidos en el formulario');
  }
}
