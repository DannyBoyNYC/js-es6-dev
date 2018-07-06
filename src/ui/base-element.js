import $ from 'jquery';

export class BaseElement {
    
    constructor() {
        this.element = null;  // jQuery object
        this.el = null;
    }
    
    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        // this.enableJS();
    }
    
    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }
    
    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }

    // enableJS() {
        // componentHandler.upgradeElement(this.element[0]);
    // }

    // Daniel
    appendEl(){
        this.createEl();
        document.querySelector('list').innerHTML
    }

    createEl(){
        let e = this.getElementString();
        this.el = e;
    }
    
}