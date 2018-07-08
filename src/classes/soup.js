import {Recipe} from './recipe.js';

export class Soup extends Recipe {
    
    constructor(title, type, description, image) {
        super(title, type, description, image);
        this.stock = null;
    }
}