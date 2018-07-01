import {Car} from './classes/car.js';
import { Drone } from './classes/drone.js';
import mdl from 'material-design-lite';
import $ from 'jquery';
import {fleet} from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';

import { Button } from './ui/button.js';
import {Image} from './ui/image.js';

let b = new Button('Click Me');
b.appendToElement($('body'));

let i = new Image('../img/drone.jpg');
i.appendToElement($('body'));

// let c = new Button('whoa');
// const elone = document.querySelector('body');

// var replaceJq = new Object()
// var replaceJqArr = new Array

// replaceJq[0] = elone;
// replaceJqArr.push(elone);

// c.appendToElement(replaceJqArr[0]);

// console.log($('body')[0]);
// console.log(replaceJqArr[0])


// let dataService = new FleetDataService();
// dataService.loadData(fleet);

//let car = dataService.getCarByLicense('AT9900');

//let cars = dataService.getCarsSortedByLicense();

// let cars = dataService.filterCarsByMake('e');

// for (let car of cars)
//     console.log(car.make);