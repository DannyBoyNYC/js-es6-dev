import {BaseElement} from './base-element.js';

export class Button extends BaseElement {
    
    constructor(title) {
        super();
        this.elem = 'btn';
        this.title = title;
        this.styleString = '';
    }
    
    getElementString() {
        return `
        <button class=""
        style="${this.styleString}">
            ${this.title}
        </button>
        `;
    }

    setStyleString(style) {
        this.styleString = style;
    }
}