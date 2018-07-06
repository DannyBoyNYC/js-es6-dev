// import {Car} from './classes/car.js';
// import { Drone } from './classes/drone.js';
import mdl from 'material-design-lite';
import $ from 'jquery';
import {fleet} from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';


let dataService = new FleetDataService();
dataService.loadData(fleet);

// Daniel
import { List } from './ui/list.js';
let l = new List('List Title');
l.addVehicle('Blah');
l.addVehicle('Blahdee');
l.addVehicle('Blah');
document.querySelector('list').innerHTML = l.getElementString();
console.log(l)
//end Daniel

import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js';
import { DataTable } from './ui/data-table.js';

let b = new Button('Click Me');
b.appendToElement($('body'));

let i = new Image('/img/drone.jpg');
i.appendToElement($('body'));

let tb = new TitleBar('My Application');
tb.addLink('hell','')
tb.addLink('heaven','')
tb.addLink('home','')
tb.appendToElement($('body'));
// console.log(tb)

let headers = "License Make Model Miles".split(' ');
let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));
console.log(dt)
console.log(dataService.cars)


// let dataService = new FleetDataService();
// dataService.loadData(fleet);

//let car = dataService.getCarByLicense('AT9900');

//let cars = dataService.getCarsSortedByLicense();

// let cars = dataService.filterCarsByMake('e');

// for (let car of cars)
//     console.log(car.make);