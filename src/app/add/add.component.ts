import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  data: any = [];
  constructor(private routes: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  registerPlayer(
    Name: string,
    Matches: any,
    Innings: any,
    BoundaryFours: any,
    BoundarySixes: any
  ) {
    this.apiService
      .addPlayer({
        Name: Name,
        Matches: Matches,
        Innings: Innings,
        BoundaryFours: BoundaryFours,
        BoundarySixes: BoundarySixes,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('registerPlayer', this.data);
      });
    this.routes.navigate(['/dashboard']);
  }
  Register(
    Name: string,
    Matches: any,
    Innings: any,
    BoundaryFours: any,
    BoundarySixes: any
  ) {
    this.registerPlayer(Name, Matches, Innings, BoundaryFours, BoundarySixes);
  }
}
