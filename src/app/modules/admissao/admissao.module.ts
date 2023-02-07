import { AdmissaoComponent } from './adminissao.component';
import { AdminissaoRoutingModule } from './adminissao-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';
import { InformationComponent } from './views/information/information.component';
import { FindCpfComponent } from './components/find-cpf/find-cpf.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, SideMenuComponent, TopMenuComponent, BottomMenuComponent, AdmissaoComponent, InformationComponent, FindCpfComponent, StepperComponent],
  imports: [
    CommonModule,
    AdminissaoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdmissaoModule { }
