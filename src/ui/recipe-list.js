import { BaseElement } from './base-element.js';

export class RecipeList extends BaseElement {

  constructor(title) {
    super();
    this.elem = 'list';
    this.title = title;
    this.recipes = [];
  }
  
  addRecipe(name) {
    this.recipes.push({
        name
    });
  }

  getElementString() {

    let markup = '';
    for (let recipe of this.recipes) {
      markup += `<li class="woo">${recipe.name}</li>`;
    }

    return `
    <div class="wrap">
      <h1>${this.title}</h1>
      <ul>
        ${markup}
      </ul>
    </div>
    `
  }
}