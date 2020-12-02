import { GymService } from './../gym.service';
import { Gym } from './../gym';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  gyms: Gym[] = [];
  selectedGym: Gym;

  onClick(gym) {
       this.selectedGym = gym;
       this.router.navigate(['/moredetails', gym.id]);
  }

  constructor(private router: Router, private gymservice: GymService) { }

  getGyms(): void {
    this.gymservice.getGyms().subscribe(gyms => this.gyms = gyms);
  }

  ngOnInit(): void {
    this.getGyms();
  }

}
