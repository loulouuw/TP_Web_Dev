import template from "/src/app/components/navbar/navbar.component.html";

export class NavbarComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = template;
    }
  }