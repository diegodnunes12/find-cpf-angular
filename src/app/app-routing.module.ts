import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import("./modules/admissao/admissao.module").then((module) => module.AdmissaoModule),
      }
    ]
  },
  { path: "**", redirectTo: "notfound" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
