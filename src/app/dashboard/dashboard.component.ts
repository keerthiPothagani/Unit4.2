import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayerLeastInnings() {
    this.apiService.getPlayerLeastInnings().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayerHighestBoundarySixes() {
    this.apiService
      .getPlayerHighestBoundarySixes()
      .subscribe((response: any) => {
        this.data = response?.response;
      });
  }
  getPlayersByBoundaryFours() {
    this.apiService.getPlayersByBoundaryFours().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByLeastBoundaryFours() {
    this.apiService
      .getPlayersByLeastBoundaryFours()
      .subscribe((response: any) => {
        this.data = response?.response;
      });
  }
  getPlayerHighestMatches() {
    this.apiService.getPlayerHighestMatches().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-player-least-innings') {
      this.getPlayerLeastInnings();
    } else if (value === 'get-player-highest-boundary-sixes') {
      this.getPlayerHighestBoundarySixes();
    } else if (value === 'get-players-by-boundary-fours') {
      this.getPlayersByBoundaryFours();
    } else if (value === 'get-players-by-least-runs') {
      this.getPlayersByLeastBoundaryFours();
    } else if (value === 'get-player-highest-matches') {
      this.getPlayerHighestMatches();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
