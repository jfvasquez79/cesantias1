import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
//ESTILOS
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
//ROUTES
import { AppRoutingModule ,componentRouting} from './app-routing.module';
//HTTP
import {HttpClientModule} from '@angular/common/http'
//COMPONENTS
import { AppComponent } from './app.component';
import { BudgetAvailabilityComponent } from './components/budget-availability/budget-availability.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    componentRouting,
    BudgetAvailabilityComponent,
    ResolutionComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
