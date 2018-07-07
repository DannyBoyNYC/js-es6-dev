import $ from 'jquery';
import {fleet} from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';
import { ApplicationBase } from './framework/application-base.js';
import { HomePage } from './home-page.js';
import {CarsPage} from './cars-page.js';

export class App extends ApplicationBase {

  constructor(){
    super('Fleet Manager');
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', null);
  }
  
}

// Daniel
import { List } from './ui/list.js';
let l = new List('List Title');
l.addVehicle('Blah');
l.addVehicle('Blahdee');
l.addVehicle('Blah');
l.appendEl(l.elem);
//end Daniel

export let application = new App();
application.show($('body'));

// import { Button } from './ui/button.js';
// import { Image } from './ui/image.js';
// import { TitleBar } from './ui/title-bar.js';
// import { DataTable } from './ui/data-table.js';

// let b = new Button('Click Me');
// b.appendToElement($('body'));

// let i = new Image('/img/drone.jpg');
// i.appendToElement($('body'));

// let tb = new TitleBar('My Application');
// tb.addLink('hell','')
// tb.addLink('heaven','')
// tb.addLink('home','')
// tb.appendToElement($('body'));
// console.log(tb)

// let headers = "License Make Model Miles".split(' ');
// let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));
// console.log(dt)
// console.log(dataService.cars)


// let dataService = new FleetDataService();
// dataService.loadData(fleet);

//let car = dataService.getCarByLicense('AT9900');

//let cars = dataService.getCarsSortedByLicense();

// let cars = dataService.filterCarsByMake('e');

// for (let car of cars)
//     console.log(car.make);