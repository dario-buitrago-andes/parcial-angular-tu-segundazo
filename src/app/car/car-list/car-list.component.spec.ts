/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Car } from '../car';
import { By } from '@angular/platform-browser';


import { CarListComponent } from './car-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from '../car.service';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CarListComponent ],
      providers: [CarService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;

    component.cars.push(new Car(1, "Reault", "Duster", "life", 2019, 12434, "rojo", "la imagen 1"))
    component.cars.push(new Car(1, "Reault", "Sandero", "eco", 2009, 3431, "verde", "la imagen 2"))
    component.cars.push(new Car(1, "Chevrolet", "Onix", "Steal", 2021, 4422, "azul", "la imagen 3"))

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('table must have 1 heade and 3 rows', () => {
    expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
  });

});
