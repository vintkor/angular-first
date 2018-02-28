import { Component } from '@angular/core';

@Component({
  selector: '.app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  carName: string = 'Ford';
  carYear: number = 1983;

  getName(){
    return this.carName;
  }

}
