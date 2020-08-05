import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { PackagesComponent } from './packages/packages.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CareerComponent } from './career/career.component';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './registration-step3/registration-step3.component';
import { RegistrationStep4Component } from './registration-step4/registration-step4.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CartComponent } from '../after-signup/cart/cart.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { VerifyOTPComponent } from "./verify-otp/verify-otp.component";
import { SearchComponent } from './search/search.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OathComponent } from './oath/oath.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'home/:id', component: HomeComponent},
  {path:'aboutUs', component: AboutUsComponent},
  {path:'faq', component: FaqComponent},
  {path:'packages', component: PackagesComponent},
  {path:'store', component: StoreComponent},
  {path:'login', component: LoginComponent},
  {path:'blogs', component: BlogListComponent},
  {path:'cart', component: CartComponent},
  {path:'careers', component: CareerComponent},
  {path:'search', component: SearchComponent},
  {path :'contactUs', component: ContactUsComponent},
  {path :'termsOfUse', component: TermsOfUseComponent},
  {path :'oath', component: OathComponent},
  {path:'forgotPassword', component: ForgotPasswordComponent},
  {path:'changePassword', component: ChangePasswordComponent},
  {path:'verifyOTP', component: VerifyOTPComponent},
  {path :'privacyPolicy', component: PrivacyPolicyComponent},
  {path:'successStories', component: SuccessStoriesComponent},
  {path:'registrationStep-1', component: RegistrationStep1Component},
  {path:'registrationStep-2', component: RegistrationStep2Component},
  {path:'registrationStep-3', component: RegistrationStep3Component},
  {path:'registrationStep-4', component: RegistrationStep4Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeforeSignupRoutingModule { }
