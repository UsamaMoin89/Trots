import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { ActiveSessionComponent } from './active-session/active-session.component';
import { AddQuizesComponent } from './add-quizes/add-quizes.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { StudentsComponent } from './students/students.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { TutorsComponent } from './tutors/tutors.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: '',
        redirectTo: '/manage/auth/login',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'tutors',
        component: TutorsComponent
      },
      {
        path: 'students',
        component: StudentsComponent
      },
      {
        path: 'accounts',
        component: AccountsComponent
      },
      {
        path: 'active-session',
        component: ActiveSessionComponent
      },
      {
        path: 'add-quizes',
        component: AddQuizesComponent
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      }
    ]
  },
  {
    path: 'auth',
    component: AdminAuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ManagementRouting {
}
