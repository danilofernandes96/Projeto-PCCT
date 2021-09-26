import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ship',
  templateUrl: './add-ship.component.html',
  styleUrls: ['./add-ship.component.css']
})
export class AddShipComponent implements OnInit {
  shipForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.shipForm = this.fb.group({
      nameShip: ['', Validators.required],
      price: ['', Validators.required],
      destination: ['', Validators.required],
      capacity: ['', Validators.required],
      departureDay: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addShip() {
    console.log(this.shipForm);

    console.log(this.shipForm.get('nameShip')?.value);
  }

}
