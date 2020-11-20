import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  players!: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPLayers();
  }

  getPLayers(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players.slice(1, 5));
  }

}
