import { AdminissaoRoutingModule } from './adminissao-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';



@NgModule({
  declarations: [HomeComponent, SideMenuComponent, TopMenuComponent, BottomMenuComponent],
  imports: [
    CommonModule,
    AdminissaoRoutingModule,
  ]
})
export class AdmissaoModule { }
