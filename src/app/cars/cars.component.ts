import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  cars: any = [
    {
      carName: 'Ford Focus',
      carYear: 2012,
      carDescription: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
      carImage: 'https://owner.ford.com/content/dam/assets/ford/personalization/1656/escape.png'
    },
    {
      carName: 'Ford Mustang',
      carYear: 2011,
      carDescription: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
      carImage: 'https://owner.ford.com/content/dam/assets/ford/personalization/1656/escape.png'
    },
    {
      carName: 'Ford Mondeo',
      carYear: 2012,
      carDescription: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
      carImage: 'https://owner.ford.com/content/dam/assets/ford/personalization/1656/escape.png'
    }
  ]

  canAddCar: boolean = false;

  constructor(){
    setInterval(() => {
        this.canAddCar = !this.canAddCar;
      }, 2000)
  }

}
