import {Pasta} from '../classes/pasta.js';
import {Soup} from '../classes/soup.js';
// import {DataError} from './data-error.js';

export class RecipeDataService {

    constructor() {
        this.pastas = [];
        this.soups = []; 
        // this.errors = [];       
    }    
    
    // getCarByLicense(license) {
    //     return this.cars.find(function(car) {
    //         return car.license === license;
    //     });
    // }
    
    // getCarsSortedByLicense() {
    //     return this.cars.sort(function(car1, car2) {
    //         if (car1.license < car2.license)
    //             return -1;
    //         if (car1.license > car2.license)
    //             return 1;
    //         return 0;
    //     });
    // }
    
    // filterCarsByMake(filter) {
    //     return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    // }
    
    loadData(recipes) {
        for (let data of recipes) {
            switch(data.type) {
                case 'pasta':
                    // if (this.validatePastaData(data)) {
                        let pasta = this.loadPasta(data);
                        if (pasta) 
                            this.pastas.push(pasta);
                    // }
                    // else {
                        // let e = new DataError('invalid pasta data', data);
                        // this.errors.push(e);
                    // }
                    break;
                case 'soup':
                    this.soups.push(data);
                    break;
                // default:
                //     let e = new DataError('Invalid recipe type', data);
                //     this.errors.push(e);
                //     break;
            }
        }
    }
    
    loadPasta(pasta) {
        // try {
            let p = new Pasta(pasta.title, pasta.type, pasta.desciption, pasta.image);
            p.pasta = pasta.pasta;
            // c.make = car.make;
            return p;
        // } catch(e) {
        //     this.errors.push(new DataError('error loading car', car));
        // }
        // return null;
    }
    
    // validateCarData(pasta) {
    //     let requiredProps = 'license model latLong miles make'.split(' ');
    //     let hasErrors = false;
        
    //     for (let field of requiredProps) {
    //         if (!car[field]) {
    //             this.errors.push(new DataError(`invalid field ${field}`, car));
    //             hasErrors = true;
    //         }
    //     }
    //     if (Number.isNaN(Number.parseFloat(car.miles))) {
    //         this.errors.push(new DataError('invalid milage', car));
    //         hasErrors = true;
    //     }
    //     return !hasErrors;
    // }
}