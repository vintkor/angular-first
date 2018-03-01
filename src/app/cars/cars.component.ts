import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  cars: any = [
    {
      carName: 'Ford Edge',
      carYear: 2016,
      carDescription: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
      carImage: 'https://media.ed.edmunds-media.com/ford/edge/2017/ot/2017_ford_edge_LIFE1_ot_207173_1280.jpg'
    },
    {
      carName: 'Ford Mustang',
      carYear: 2011,
      carDescription: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
      carImage: 'https://www.leithcars.com/assets/shared/CustomHTMLFiles/Responsive/MRP/Ford/2017/Mustang/images/2017-Ford-Mustang-01.jpg'
    },
    {
      carName: 'Ford Mondeo',
      carYear: 2017,
      carDescription: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
      carImage: 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/cars-car/image/2015/01/buyers_guide_-_ford_mondeo_2014_-_front_quarter.jpg?itok=ejrh2ffE'
    }
  ];

  isMessage: boolean = false;
  inputText: string;

  setInputText(value){
    this.inputText = value;
  }

  toggleMessage(){
    this.isMessage = !this.isMessage;
  }

}
