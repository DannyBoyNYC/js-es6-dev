// 1: CLASSES
class Recipe {
    
}

let recipe = new Recipe();

console.log(recipe instanceof Recipe);


// 2: INSTANCES
// class Recipe {
//   constructor(id, name) {
//       this.id = id;
//       this.name = name;
//   }
// }

// let recipe = new Recipe('123', 'Lasagna');

// console.log('recipe: ' + recipe['id'] + ' ' + recipe['name']);

// 3: STATIC PROPERTIES
// class Recipe {
//   constructor(id, name) {
//       this.id = id;
//       this.name = name;
//   }
// }
// Recipe.maxHeight = 2000;

// let recipe = new Recipe('123', 'Lasagna');
// let recipe2 = new Recipe('456', 'Toast');

// console.log(recipe.maxHeight);

// 4: METHODS
// class Recipe {
//   constructor(id, name) {
//       this.id = id;
//       this.name = name;
//   }
  
//   cook() {
//       console.log('Recipe ' + this.id + ' is cookin');
//   }
// }

// let recipe = new Recipe('123', 'Lasagna');
// let recipe2 = new Recipe('456', 'Toast');

// recipe.cook();
// recipe2.cook();

// 5: STATIC METHODS
// class Recipe {
//   constructor(id, name) {
//       this.id = id;
//       this.name = name;
//   }
  
//   static getCompany() {
//       console.log('hellooo');
//   }
  
//   cook() {
//       console.log('recipe ' + this.id +' is cooking');
//   }
// }

// let recipe = new Recipe('123', 'Lasagna');
// let recipe2 = new Recipe('456', 'Toast');

// Recipe.getCompany();

// 6: GETTERS AND SETTERS
// class Recipe {
//   constructor(id) {
//       this._id = id;
//   }

//   get id() {
//       console.log('in id getter');
//       return this._id + ' TEMPORARY';
//   }
  
//   set id(value) {
//       this._id = value;
//   }
// }

// let recipe = new Recipe('Toast');
// recipe.id = '456';
// console.log('recipe id: ' + recipe.id);
