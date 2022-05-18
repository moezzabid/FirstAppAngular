import {Component, OnInit} from '@angular/core';
import {BikeService} from "../../service/bike.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  bikeform : FormGroup;
  models: string[]=['Globo MTB 29 Full Suspension',
                     'Globo Carbon Fiber Race Series',
                      'Globo Time Trial Blade'];

  validMessage:string="";

  constructor(private bikeService: BikeService, private formBuilder:FormBuilder) {
    this.bikeform =new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      serialNumber:new FormControl('',Validators.required),
      purchasePrice:new FormControl('',Validators.required),
      purchaseDate:new FormControl('',Validators.required),
      contact:new FormControl()
    })
  }

  ngOnInit(): void {
    this.bikeform =new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      serialNumber:new FormControl('',Validators.required),
      purchasePrice:new FormControl('',Validators.required),
      purchaseDate:new FormControl('',Validators.required),
      contact:new FormControl()
    })

  }

  sbmitRegistration(){
    if(this.bikeform.valid){
      this.validMessage="your bike registration has been dubmitted.Thank you!";
      this.bikeService.createBike(this.bikeform.value).subscribe(
        data=> {
          this.bikeform.reset();
          return true
        },
        error =>{
          return error ;
        }
      )
    }else{
      this.validMessage="Please fill out the form before Submitting!";
    }
  }

}
