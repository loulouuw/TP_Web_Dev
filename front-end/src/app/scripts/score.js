import template from "/src/app/views/score.html";
import { parseUrl } from "./utils";
import { Component } from "./component";
  /* class ScoreComponent constructor */
  export class ScoreComponent extends Component{
    constructor(){
      super(template)
      let params = parseUrl();
      this.template = template;
      this.name = params.name;
      this.size = parseInt(params.size);
      this.time = parseInt(params.time);
    }
    init() {
      document.getElementById("name").innerText = this.name;
      document.getElementById("size").innerText = this.size;
      document.getElementById("time").innerText = this.time;
    };
  }

