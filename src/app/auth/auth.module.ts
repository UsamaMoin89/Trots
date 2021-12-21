import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SharedModule } from '../shared/shared.module';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { AuthRouting } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LocationComponent } from './location/location.component';
import { InstitutionInfoComponent } from './institution-info/institution-info.component';
import { AgreementComponent } from './agreement/agreement.component';
import { AgmCoreModule } from '@agm/core';
import { SubjectInformationComponent } from './subject-information/subject-information.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { SelectedSubjectsComponent } from './selected-subjects/selected-subjects.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { SubjectsForQuizComponent } from './subjects-for-quiz/subjects-for-quiz.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthMainComponent,
    RegisterComponent,
    LocationComponent,
    InstitutionInfoComponent,
    AgreementComponent,
    SubjectInformationComponent,
    QuestionnairesComponent,
    SelectedSubjectsComponent,
    ComplianceComponent,
    SubjectsForQuizComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRouting,
    NgxCaptchaModule,
    AgmCoreModule
  ]
})
export class AuthModule {
}
