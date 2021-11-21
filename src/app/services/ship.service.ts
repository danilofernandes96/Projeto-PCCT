import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../model/ship';

@Injectable({
  providedIn: 'root'
})
export class ShipService {
  url = 'http://localhost:4000/api/add-ship';

  constructor(private http: HttpClient) { }

  getShips(): Observable<any> {
    return this.http.get(this.url);
  }

  addShip(ship: Ship): Observable<any> {
    return this.http.post(this.url, ship);
  } 
}
