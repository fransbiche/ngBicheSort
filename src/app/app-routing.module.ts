import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { RankingComponent } from './ranking/ranking.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/ranking', pathMatch: 'full' },
  { path: 'players', component: PlayersComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'detail/:id', component: PlayerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
