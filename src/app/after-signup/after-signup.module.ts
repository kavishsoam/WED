import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterSignupRoutingModule } from './after-signup-routing.module';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CartComponent } from './cart/cart.component';
import { MySubscriptionsComponent } from './my-subscriptions/my-subscriptions.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { InterestedListComponent } from './interested-list/interested-list.component';
import { RejectionListComponent } from './rejection-list/rejection-list.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { PictureBoxesComponent } from './picture-boxes/picture-boxes.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [MatchListComponent, MatchDetailsComponent, NotificationsComponent, CartComponent, MySubscriptionsComponent, FavouriteListComponent, InterestedListComponent, RejectionListComponent, ProposalListComponent, PictureBoxesComponent, ProfileComponent, AddUserComponent],
  imports: [
    CommonModule,
    AfterSignupRoutingModule
  ]
})
export class AfterSignupModule { }
