import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllFriendsComponent } from './all-friends/all-friends.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { BestFriendsComponent } from './best-friends/best-friends.component';
import { EditFriendComponent } from './edit-friend/edit-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    AllFriendsComponent,
    AddFriendComponent,
    BestFriendsComponent,
    EditFriendComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'all', component: AllFriendsComponent },
      { path: 'add', component: AddFriendComponent },
      { path: 'best', component: BestFriendsComponent },
      { path: 'edit', component: EditFriendComponent },
      { path: '', redirectTo: '/all', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
