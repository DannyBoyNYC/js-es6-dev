export class BaseElement {
    
    constructor() {
        this.el = null; 
    }
    
    appendEl(){
        let e = this.getElementString();
        let el = document.querySelector(this.elem)
        el.innerHTML = e;
    }

    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }
}