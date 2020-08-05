import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '',redirectTo:'visitor',pathMatch:'full'},
  {path: 'visitor',loadChildren: () => import('./before-signup/before-signup.module').then( m => m.BeforeSignupModule)},
  {path: 'member',loadChildren: () => import('./after-signup/after-signup.module').then( m => m.AfterSignupModule)},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
