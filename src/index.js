import {recipes} from './recipe-data.js';
import { RecipeDataService } from './services/recipe-data-service.js';

import { RecipeList } from './ui/recipe-list.js';
import { Button } from './ui/button.js';
import { Image } from './ui/image.js';
import { TitleBar } from './ui/title-bar.js';

let dataService = new RecipeDataService();
dataService.loadData(recipes);
console.log(recipes)


let l = new RecipeList('Recipe List');
l.addRecipe('Tofu Tods');
l.addRecipe('Rigatoni');
l.addRecipe('Caramel Apples');
l.appendEl(l.elem);

let tb = new TitleBar('Recipes!');
tb.appendEl(tb.elem);

let b = new Button('More Recipes');
b.appendEl(b.elem)

let i = new Image('lasagna')
i.appendEl(i.elem)