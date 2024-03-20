import back from "./assets/cards/back.png";
import card0 from "./assets/cards/card-0.png";
import card1 from "./assets/cards/card-1.png";
import card2 from "./assets/cards/card-2.png";
import card3 from "./assets/cards/card-3.png";
import card4 from "./assets/cards/card-4.png";
import card5 from "./assets/cards/card-5.png";
import card6 from "./assets/cards/card-6.png";
import card7 from "./assets/cards/card-7.png";
import card8 from "./assets/cards/card-8.png";
import card9 from "./assets/cards/card-9.png";
import { Component } from "../../../scripts/component";
import CARD_TEMPLATE from "./card.component.html"
import "./card.component.css";

let CARDS_IMAGE = [
  back,
  card0,
  card1,
  card2,
  card3,
  card4,
  card5,
  card6,
  card7,
  card8,
  card9,
]; 

  /* class CardComponent constructor */
  export class CardComponent extends Component {
    constructor(id) {
    super(CARD_TEMPLATE)
    this.id=id;
    // is this card flipped?  
    this._flipped = false;

    // has the matching card has been discovered already?
    this.matched = false;

    this._elt = document.createElement("div");
    this._elt.innerHTML = this.template;
    this._elt = this._elt.firstElementChild;
    this._id = id;

    this._imageElt = this.getElement().querySelector(".card-wrapper");
    this._imageElt.querySelector("img.front-face").src =
      CARDS_IMAGE[this._id + 1];
    this._imageElt.querySelector("img.back-face").src = CARDS_IMAGE[0];
    }

    get flipped(){
      return this._flipped;
    }

    set flipped(_flipped) {
      this._flipped = _flipped
    }

    getElement() {
        return this._elt;
    };
    flip() {
        this._imageElt.classList.toggle("flip");
        this._flipped = !this._flipped;
    };
    equals(card) {
        return card._id === this._id;
    };
  }
