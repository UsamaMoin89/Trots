import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ManagementRouting } from './management.routing';
import { TutorsComponent } from './tutors/tutors.component';
import { StudentsComponent } from './students/students.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ActiveSessionComponent } from './active-session/active-session.component';
import { AddQuizesComponent } from './add-quizes/add-quizes.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';

@NgModule({
  declarations: [
    AdminPanelComponent,
    LoginComponent,
    DashboardComponent,
    TutorsComponent,
    StudentsComponent,
    AccountsComponent,
    ActiveSessionComponent,
    AddQuizesComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    AdminAuthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManagementRouting
  ]
})

export class ManagementModule { }
