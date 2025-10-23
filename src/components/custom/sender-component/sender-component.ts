import html from "./sender-component.html?raw";
import css from "./sender-component.css?raw";

const template = document.createElement("template");
template.innerHTML = `<style>${css}</style>${html}`;

class SenderComponent extends HTMLElement {
  private _message: string = "Hello from Sender!";
  private _button: HTMLButtonElement | null = null;

  static get observedAttributes() {
    return ["message", "background-color"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.appendChild(template.content.cloneNode(true));
    this._button = this.shadowRoot!.querySelector("button");
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
    if (name === "message") {
      this._message = newValue;
    }
    if (name === "background-color") {
        if (this._button) {
            this._button.style.backgroundColor = newValue;
        }
    }
  }

  connectedCallback() {
    if (this.hasAttribute("message")) {
      this._message = this.getAttribute("message")!;
    }
    if (this.hasAttribute("background-color")) {
        if (this._button) {
            this._button.style.backgroundColor = this.getAttribute("background-color")!;
        }
    }

    this._button!.addEventListener("click", () => {
      const event = new CustomEvent("my-custom-event", {
        bubbles: true,
        composed: true,
        detail: { message: this._message },
      });
      this.dispatchEvent(event);
    });
  }
}

customElements.define("sender-component", SenderComponent);
