import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player } from './player';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 11, name: 'fransbiche' },
      { id: 12, name: 'Nico' },
      { id: 13, name: 'Florian' },
      { id: 14, name: 'Julien' },
      { id: 15, name: 'Vaser' },
      { id: 16, name: 'Antho' },
      { id: 17, name: 'Florent' },
      { id: 18, name: 'Greg' }
    ];
    return { players };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 11;
  }
}
