import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ListApiService {

  private url = 'http://localhost:3000/results';

 constructor(private http: HttpClient) { }



}

