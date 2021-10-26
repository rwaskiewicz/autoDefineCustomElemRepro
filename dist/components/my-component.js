import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './another-component2.js';

const myComponentCss = ":host{display:block}";

let MyComponent$1 = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return h("div", null, h("another-component", null));
  }
  static get style() { return myComponentCss; }
};
MyComponent$1 = /*@__PURE__*/ proxyCustomElement(MyComponent$1, [1, "my-component", {
    "first": [1],
    "middle": [1],
    "last": [1]
  }]);
function defineCustomElement$1() {
  const components = ["my-component", "another-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
    case "another-component":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
