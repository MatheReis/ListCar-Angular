import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GlobalVariablesComponent } from '../global-variables/global-variables.component';

@Component({
  selector: 'list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss'],
})
export class ListCarComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  @Output() public eventSingleCar: EventEmitter<number> = new EventEmitter();

  title = 'list-car';
  public data: any;
  public getData: any;
  private url = 'http://localhost:3000/results';
  searchKey!: string;


  constructor(
    private http: HttpClient,
    private ActivatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void{
    this.http.get(this.url).subscribe( res => {
      this.data = res
      this.getData = this.data;
    });
  }

  public setIndividualVehicle(vehicleId: number) {
    this.eventSingleCar.emit(vehicleId);
    GlobalVariablesComponent.CarId = vehicleId;
  }


  public getSearch(value: string){
    const filter = this.data.filter( (res: any) => {
      return res.nome.indexOf(value.toLowerCase());
    });

    this.getData = filter;
  }

}
