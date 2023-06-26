import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addPlayer(body: any) {
    return this.http.post('http://localhost:3000/add-player', body);
  }
  public updatePlayer(body: any) {
    return this.http.post('http://localhost:3000/update-player', body);
  }
  public findPlayer(body: any) {
    return this.http.post('http://localhost:3000/find-player', body);
  }
  public deletePlayer(body: any) {
    return this.http.post('http://localhost:3000/delete-player', body);
  }
  public getAllPlayers() {
    return this.http.get('http://localhost:3000/find-all-players');
  }
  public getPlayerLeastInnings() {
    return this.http.get('http://localhost:3000/get-player-least-innings');
  }
  public getPlayerHighestBoundarySixes() {
    return this.http.get(
      'http://localhost:3000/get-player-highest-boundary-sixes'
    );
  }
  public getPlayersByBoundaryFours() {
    return this.http.get('http://localhost:3000/get-players-by-boundary-fours');
  }
  public getPlayersByLeastBoundaryFours() {
    return this.http.get(
      'http://localhost:3000/get-players-by-least-boundary-fours'
    );
  }
  public getPlayerHighestMatches() {
    return this.http.get('http://localhost:3000/get-player-highest-matches');
  }
}
