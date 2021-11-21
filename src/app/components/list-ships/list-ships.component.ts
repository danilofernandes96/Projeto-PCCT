import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/model/ship';
import { ShipService } from 'src/app/services/ship.service';
@Component({
  selector: 'app-list-ships',
  templateUrl: './list-ships.component.html',
  styleUrls: ['./list-ships.component.css']
})
export class ListShipsComponent implements OnInit {
  listShips: Ship[] = [];

  constructor(private _shipService: ShipService) { }

  ngOnInit(): void {
    this.gettingShips();
  }

  gettingShips() {
    this._shipService.getShips().subscribe(data => {
      console.log(data);
      this.listShips = data;
    }, error => {
      console.log(error);
    })
  }

}
