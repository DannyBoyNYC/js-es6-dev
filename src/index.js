// //1: CREATE DATA SERVICE CLASS
// import {Car} from './classes/car.js';
// import {Drone} from './classes/drone.js';
import {List} from './ui/list.js';


import {fleet} from './fleet-data.js';
import { FleetDataService } from './services/fleet-data-service.js';
import { } from './ui/list.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);

createList(dataService.cars)


// console.log(dataService.cars);
// console.log(dataService.drones);

// for (let car of dataService.cars) {
//   console.log(car.license);
// }

// let CarsForDisplay = dataService.cars;
// console.log(CarsForDisplay.length)
// console.log(`Sample data ${CarsForDisplay[0].model}`)

    