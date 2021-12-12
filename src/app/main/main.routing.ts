import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import {ContactComponent} from "./contact/contact.component";
import {MainPrivacyPolicyComponent} from "./main-privacy-policy/main-privacy-policy.component";
import {MainTermsAndConditionsComponent} from "./main-terms-and-conditions/main-terms-and-conditions.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'privacy-policy',
        component: MainPrivacyPolicyComponent
      },
      {
        path: 'terms-and-conditions',
        component: MainTermsAndConditionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRouting {

}
