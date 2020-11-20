import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { RankingComponent } from './ranking/ranking.component';
import { PlayerSearchComponent } from './player-search/player-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentsComponent,
    GamesComponent,
    PlayersComponent,
    PlayerDetailComponent,
    MessagesComponent,
    RankingComponent,
    PlayerSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
