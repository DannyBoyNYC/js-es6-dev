import {BaseElement} from './base-element.js';

export class Image extends BaseElement {
    
    constructor(fileName) {
        super();
        this.elem = 'imagen';
        this.fileName = fileName;
    }
    
    getElementString() {
        return `
            <img src="/img/recipes/${this.fileName}.png" style="width: 100%;" />
        `;
    }
}