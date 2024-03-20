import template from "/src/app/components/footer/footer.component.html";

export class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = template;
    }
  }