import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchListComponent } from './match-list/match-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PictureBoxesComponent } from './picture-boxes/picture-boxes.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { InterestedListComponent } from './interested-list/interested-list.component';
import { RejectionListComponent } from './rejection-list/rejection-list.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { MySubscriptionsComponent } from './my-subscriptions/my-subscriptions.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'matches', pathMatch: 'full' },
  { path: 'matches', component: MatchListComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'pictureBoxes', component: PictureBoxesComponent },
  { path: 'favourites', component: FavouriteListComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'interested', component: InterestedListComponent },
  { path: 'rejected', component: RejectionListComponent },
  { path: 'proposals', component: ProposalListComponent },
  { path: 'subscriptions', component: MySubscriptionsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterSignupRoutingModule {}
