// //1: DATA SERVICE CLASS

import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);


// console.log(dataService.cars);
// console.log(dataService.drones);

// for (let car of dataService.cars) {
//   console.log(car.license);
// }

// let CarsForDisplay = dataService.cars;
// console.log(CarsForDisplay.length)
// console.log(`Sample data ${CarsForDisplay[0].model}`)

    