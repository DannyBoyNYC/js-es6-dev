import {BaseElement} from './base-element.js';

export class TitleBar extends BaseElement {
    
    constructor(title) {
        super();
        this.elem = 'titlebar';
        this.title = title;
        this.links = [];
    }
    
    addLink(title, href) {
        this.links.push({
            title,
            href
        });
    }   
    
    getElementString() {
        let links = '';
        for (let link of this.links)
            links += `<a class="">
                        ${link.title}
                      </a>\n`;
        return `
            <div class="">
                <header class="">
                    <div class="">
                        <!-- Title -->
                        <h1 class="">${this.title}</h1>

                        <nav class="">
                            ${links}
                        </nav>
                    </div>
                </header>

                <main class="">
                    <div class="page-content"><!-- Your content goes here --></div>
                </main>
                </div>
        `;
    }
}