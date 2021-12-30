
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalVariablesComponent } from 'src/app/shared/global-variables/global-variables.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  car: any;
  number_id: number = 1;
  IndividualUrl: string = '';

  constructor(
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const url = 'http://localhost:3000/results'
    this.getVehicleId(GlobalVariablesComponent.CarId);
  }


  getVehicleId(id: number){
    this.number_id = id;
    this.IndividualUrl = `http://localhost:3000/results/${this.number_id}`;

    this.http.get(this.IndividualUrl).subscribe( res => {
      this.car = res;
    })
  }

  goBack(): void{
    this.location.back()
  }

}
