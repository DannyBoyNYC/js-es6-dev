import { BaseElement } from './base-element.js';

export class List extends BaseElement {

  constructor(title) {
    super();
    this.title = title;
    this.vehicles = [];
  }
  
  addVehicle(name) {
    this.vehicles.push({
        name
    });
  }

  getElementString() {

    let markup = '';

    for (let vehicle of this.vehicles) {
      markup += `<li class="woo">${vehicle.name}</li>`;
    }

    return `
    <div>
      <h2>${this.title}</h2>
      <ul>
        ${markup}
      </ul>
    </div>
    `
  } 
}