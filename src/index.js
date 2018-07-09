import {recipes} from './recipe-data.js';
import { RecipeDataService } from './services/recipe-data-service.js';
import { ApplicationBase } from './framework/application-base.js';

import { HomePage } from './home-page.js';

export class App extends ApplicationBase {

  constructor() {
    super('Recipes!');
    this.dataService = new RecipeDataService();
    this.dataService.loadData(recipes);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Pastas', null);
    this.addRoute('Soups', null);
  }

}

let application = new App;
application.show();

// import { RecipeList } from './ui/recipe-list.js';
// import { Button } from './ui/button.js';
// import { Image } from './ui/image.js';
// import { TitleBar } from './ui/title-bar.js';

// let dataService = new RecipeDataService();
// dataService.loadData(recipes);
// console.log(recipes)


// let l = new RecipeList('Recipe List');
// l.addRecipe('Tofu Tods');
// l.addRecipe('Rigatoni');
// l.addRecipe('Caramel Apples');
// l.appendEl(l.elem);

// let tb = new TitleBar('Recipes!');
// tb.appendEl(tb.elem);

// let b = new Button('More Recipes');
// b.appendEl(b.elem)

// let i = new Image('lasagna')
// i.appendEl(i.elem)