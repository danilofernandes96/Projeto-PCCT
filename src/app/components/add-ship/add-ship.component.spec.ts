import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShipComponent } from './add-ship.component';

describe('AddShipComponent', () => {
  let component: AddShipComponent;
  let fixture: ComponentFixture<AddShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
