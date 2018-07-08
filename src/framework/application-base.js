import { TitleBar } from '../ui/title-bar.js';

export class ApplicationBase {
  
  constructor(title) {
    this.title = title;
    this.titleBar = new TitleBar(this.title);
    this.routeMap = {};
    this.defaultRoute = null;
  }
  
  show(element) {
    this.titleBar.appendToElement(element);
    
    // this.titleBar.element.find('.mdl-navigation__link').click((event) => {
    //   let route = event.target.innerHTML;
    //   this.activateRoute(route.trim());
    // });
    
    // if (this.defaultRoute) {
    //   this.activateRoute(this.defaultRoute);
    // }
  }
  
}