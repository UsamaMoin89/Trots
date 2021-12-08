import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ManagementRouting } from './management.routing';

@NgModule({
  declarations: [
    AdminPanelComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManagementRouting
  ]
})

export class ManagementModule { }
