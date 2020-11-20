import { Component, OnInit } from '@angular/core';
import { Tournament } from '../tournament';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  tournament: Tournament = {
    id: 1,
    name: 'mardi 8 avril'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
