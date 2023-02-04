import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissaoComponent } from './adminissao.component';
import { HomeComponent } from './views/home/home.component';
import { InformationComponent } from './views/information/information.component';

const routes: Routes = [
  {
    path: "",
    component: AdmissaoComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: ":cpf",
        component: InformationComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminissaoRoutingModule { }
