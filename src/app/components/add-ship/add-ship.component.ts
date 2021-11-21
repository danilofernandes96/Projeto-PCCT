import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ship } from 'src/app/model/ship';
import { ShipService } from 'src/app/services/ship.service';

@Component({
  selector: 'app-add-ship',
  templateUrl: './add-ship.component.html',
  styleUrls: ['./add-ship.component.css']
})
export class AddShipComponent implements OnInit {
  shipForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _shipService: ShipService) {
    this.shipForm = this.fb.group({
      nameShip: ['', Validators.required],
      price: ['', Validators.required],
      destination: ['', Validators.required],
      capacity: ['', Validators.required],
      departureDay: ['', Validators.required],
      imageUrl: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addShip() {
    const SHIP: Ship = {
      name: this.shipForm.get('nameShip')?.value,
      price: this.shipForm.get('price')?.value,
      destination: this.shipForm.get('destination')?.value,
      capacity: this.shipForm.get('capacity')?.value,
      departure_day: this.shipForm.get('departureDay')?.value,
      image_url: this.shipForm.get('imageUrl')?.value
    }
    this._shipService.addShip(SHIP).subscribe(data => {
      this.toastr.success('Embarcação cadastrada com sucesso!', 'Embarcação cadastrada!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.shipForm.reset();
    })
  }
}
