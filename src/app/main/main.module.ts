import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainRouting } from './main.routing';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MainPrivacyPolicyComponent } from './main-privacy-policy/main-privacy-policy.component';
import { MainTermsAndConditionsComponent } from './main-terms-and-conditions/main-terms-and-conditions.component';

@NgModule({
    declarations: [
        MainComponent,
        HomeComponent,
        ContactComponent,
        MainPrivacyPolicyComponent,
        MainTermsAndConditionsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainRouting
    ]
})
export class MainModule {
}
