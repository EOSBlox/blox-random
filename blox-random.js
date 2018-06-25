import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-random`
 * Generates a random string or number of a specified length
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxRandom extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>[[result]]</h2>
    `;
  }
  static get properties() {
    return {
      length: {
        type: Number,
        observer: '_start'
      },
      type: {
        type: String,
        observer: '_start'
      },
      result: {
        type: String,
      },
    };
  }

  _start(){
    if(this.length > 0 && this.type == 'number') {
      this.generateNumber(this.length)
    } else if (this.length > 0 && this.type == 'string'){
      this.generateString(this.length)
    }
  }

  generateNumber(len){
    return new Promise((resolve, reject) => {
      resolve(this._genNum(len))
    })
  }

  generateString(len) {
    return new Promise((resolve, reject) => {
      if (len == 0) {
        this.result = '';
      } else {
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        this.result = Array.from(arr, this._hex).join('')
        resolve(this.result);
      }
    })
  }

  _hex(dec) {
    return ('0' + dec.toString(16)).substr(-2)
  }

  _rand(){
    const arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr);
    return arr[0]/(0xffffffff + 1);
  }

  _genNum(len) {
    var add = 1
    var max = 12 - add; 
    if (len > max) {
      this.result = this._genNum(max) + this._genNum(len - max);
      return this.result;
    } else {
      max = Math.pow(10, len + add);
      var min = max/10;
      var number = Math.floor(this._rand() * (max - min + 1) ) + min;
      return ("" + number).substring(add); 
    }
  }

} window.customElements.define('blox-random', BloxRandom);
