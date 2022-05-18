import { Component, OnInit } from '@angular/core';
import {BikeService} from "../../service/bike.service";
import {Bike} from "../../data/Bike";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  bikes: Bike[] ;

  constructor(private bikeService:BikeService) {
    this.bikes=[];
  }

  ngOnInit(): void {
  }

  getBikes() {
    this.bikeService.getBikes().subscribe(
      data => {
        this.bikes = data
      },
      error => console.error(error),
      () => console.log('bikes loaded')

  );}

}
