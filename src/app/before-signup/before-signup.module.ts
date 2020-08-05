import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeSignupRoutingModule } from './before-signup-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { PackagesComponent } from './packages/packages.component';
import { StoreComponent } from './store/store.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './registration-step3/registration-step3.component';
import { RegistrationStep4Component } from './registration-step4/registration-step4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyOTPComponent } from './verify-otp/verify-otp.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { SearchComponent } from './search/search.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OathComponent } from './oath/oath.component';

@NgModule({
  declarations: [HomeComponent, AboutUsComponent, FaqComponent, PackagesComponent, StoreComponent, SuccessStoriesComponent, TermsOfUseComponent, PrivacyPolicyComponent, ContactUsComponent, CareerComponent, BlogListComponent, BlogDetailsComponent, LoginComponent, RegistrationStep1Component, RegistrationStep2Component, RegistrationStep3Component, RegistrationStep4Component, ForgotPasswordComponent, VerifyOTPComponent, SearchComponent, ChangePasswordComponent, OathComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMyDatePickerModule,
    BeforeSignupRoutingModule
  ]
})
export class BeforeSignupModule { }
