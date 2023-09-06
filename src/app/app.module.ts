import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { InformationGeneralComponent } from './components/information-general/information-general.component';
import { FactoriesComponent } from './components/factories/factories.component';
import { PrecedentsComponent } from './components/precedents/precedents.component';
import { SettledComponent } from './components/settled/settled.component';
import { BudgetAvailabilityComponent } from './components/budget-availability/budget-availability.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    InformationGeneralComponent,
    FactoriesComponent,
    PrecedentsComponent,
    SettledComponent,
    BudgetAvailabilityComponent,
    ResolutionComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es-*' }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
