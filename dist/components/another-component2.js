import { attachShadow, h, proxyCustomElement } from '@stencil/core/internal/client';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

let AnotherComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
};
AnotherComponent = /*@__PURE__*/ proxyCustomElement(AnotherComponent, [1, "another-component", {
    "first": [1],
    "middle": [1],
    "last": [1]
  }]);
function defineCustomElement() {
  const components = ["another-component"];
  components.forEach(tagName => { switch (tagName) {
    case "another-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AnotherComponent);
      }
      break;
  } });
}
defineCustomElement();

export { AnotherComponent as A, defineCustomElement as d };
