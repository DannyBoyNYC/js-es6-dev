import {Recipe} from './recipe.js';

export class Pasta extends Recipe {
    
    constructor(title, type, description, image) {
        super(title, type, description, image);
        this.pasta = null;
    }
}