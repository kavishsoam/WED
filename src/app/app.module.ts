
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { SignoutComponent } from './modals/signout/signout.component';
import { MatchDetailsComponent } from './modals/match-details/match-details.component';
import { MusicListComponent } from './modals/music-list/music-list.component';
import { visitorAuthGuard } from './providers/guards/visitor.auth.guard';
import { userAuthGuard } from './providers/guards/user.auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignoutComponent,
    MatchDetailsComponent,
    MusicListComponent,
    PageNotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    AngularMyDatePickerModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    visitorAuthGuard,
    userAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
