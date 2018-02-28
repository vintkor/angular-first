import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  canAddCar: boolean = false;

  constructor(){
    setInterval(() => {
        this.canAddCar = !this.canAddCar;
      }, 2000)
  }

}
