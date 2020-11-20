import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Player } from './player';
import { PLAYERS } from './mock-players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playersUrl = 'api/players';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPlayers(): Observable<Player[]> {
    // TODO: send the message _after_ fetching the players
    return this.http.get<Player[]>(this.playersUrl)
      .pipe(
        tap(_ => this.log('fetched players')),
        catchError(this.handleError<Player[]>('getPlayers', []))
      );
  }

  getPlayer(id: number): Observable<Player> {
    // TODO: send the message _after_ fetching the player
    const url = `${this.playersUrl}/${id}`;
    return this.http.get<Player>(url).pipe(
      tap(_ => this.log(`fetched player id=${id}`)),
      catchError(this.handleError<Player>(`getPlayer id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchPlayers(term: string): Observable<Player[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Player[]>(`${this.playersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found players matching "${term}"`) :
        this.log(`no players matching "${term}"`)),
      catchError(this.handleError<Player[]>('searchPlayers', []))
    );
  }

  /** PUT: update the hero on the server */
  updatePlayer(player: Player): Observable<any> {
    return this.http.put(this.playersUrl, player, this.httpOptions).pipe(
      tap(_ => this.log(`updated player id=${player.id}`)),
      catchError(this.handleError<any>('updatePlayer'))
    );
  }

  /** POST: add a new hero to the server */
  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(this.playersUrl, player, this.httpOptions).pipe(
      tap((newPlayer: Player) => this.log(`added player w/ id=${newPlayer.id}`)),
      catchError(this.handleError<Player>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePlayer(player: Player | number): Observable<Player> {
    const id = typeof player === 'number' ? player : player.id;
    const url = `${this.playersUrl}/${id}`;

    return this.http.delete<Player>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted player id=${id}`)),
      catchError(this.handleError<Player>('deletePlayer'))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`PlayerService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

