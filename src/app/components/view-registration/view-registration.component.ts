import { Component, OnInit } from '@angular/core';
import {Bike} from "../../data/Bike";
import {BikeService} from "../../service/bike.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {

  bikeReg={} as Bike;
  constructor(private bikeService:BikeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getBikeReg(this.route.snapshot.params['id']);
  }

  getBikeReg(id:number){
    this.bikeService.getBike(id).subscribe(
      data =>{
        this.bikeReg=data ;
      },
      error =>console.log(error),
      () =>console.log('bikes loaded')
    );

  }

}
