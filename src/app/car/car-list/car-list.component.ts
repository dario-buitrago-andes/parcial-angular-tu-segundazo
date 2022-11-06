import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<Car> = [];
  totals: Array<string> = []

  constructor(
    private carService: CarService,
  ) { }

  getCars() : void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
      this.getTotals()
    })
  }

  getTotals() : void {
    let carsMap = new Map();
    this.cars.forEach(car => carsMap.set(car.marca, this.cars.filter(carfilter => carfilter.marca === car.marca).length))
    carsMap.forEach((value, key) => this.totals.push("Total ".concat(key).concat(": ").concat(value)))
  }

  ngOnInit() {
    this.getCars();
  }

}
