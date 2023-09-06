import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationGeneralComponent } from './components/information-general/information-general.component';
import { FactoriesComponent } from './components/factories/factories.component';
import { PrecedentsComponent } from './components/precedents/precedents.component';
import { SettledComponent } from './components/settled/settled.component';
const routes: Routes = [
  { path: 'informGeneral', component: InformationGeneralComponent },
  { path: 'factores', component: FactoriesComponent },
  { path: 'precedentes', component: PrecedentsComponent },
  { path: 'radicado', component: SettledComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
