// // 1: EXTENDING A CLASS
class Recipe {
    
}

class Lasagna extends Recipe {
    
}

class Pho extends Recipe {
    
}

let c = new Lasagna();
let d = new Pho();

console.log(c);
console.log(d);


// // 2: INHERITING CONSTRUCTORS
// class Recipe {
//   constructor(cookTime) {
//     this.cookTime = cookTime;
//   }
// }

// class Lasagna extends Recipe {
    
// }

// class Pho extends Recipe {
//   constructor(cookTime) {
//     super(cookTime)
//   }
// }

// let c = new Pho(120);

// console.log(c.cookTime);


// // 3: INHERITING PROPERTIES
// class Recipe {
//   constructor() {
//       this.soup = false;
//   }
// }

// class Lasagna extends Recipe {
    
// }

// class Pho extends Recipe {
//   constructor() {
//       super();
//       this.soup = true;
//   }
// }

// let c = new Pho();
// console.log(c.soup);


// // 4: INHERITING METHODS
// class Recipes {
//   start() {
//       console.log('starting Recipes');
//   }
//   static getRegion() {
//       console.log('My Region');
//   }
// }

// class Lasagna extends Recipes {
//   start() {
//       super.start();
//       console.log('starting Lasagna');
//   }
//   static getRegion() {
//       super.getRegion();
//       console.log('My other Region');
//   }
// }

// let c = new Lasagna();
// // Lasagna.getRegion();


// // 5: SEPARATING CLASSES
// import {Lasagna} from './classes/lasagna.js';
// import {Pho} from './classes/pho.js';

// let c = new Lasagna();
// let d = new Pho();

// console.log(c);
// console.log(d);



