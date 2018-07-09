import {Pasta} from '../classes/pasta.js';
import {Soup} from '../classes/soup.js';

export class RecipeDataService {
    
    constructor() {
        this.pastas = [];
        this.soups = [];      
    }
    
    loadData(recipes) {
        for (let data of recipes) {
            switch(data.type) {
                case 'pasta':
                let pasta = this.loadPasta(data);
                if (pasta) 
                this.pastas.push(pasta);
                break;
                case 'soup':
                this.soups.push(data);
                break;
            }
        }
    }
    
    loadPasta(pasta) {
        let p = new Pasta(pasta.title, pasta.type, pasta.desciption, pasta.image);
        p.pasta = pasta.pasta;
        return p;
    }
}