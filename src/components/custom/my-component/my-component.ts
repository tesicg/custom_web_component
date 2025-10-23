import html from './my-component.html?raw'
import css from './my-component.css?raw'

const template = document.createElement('template')
template.innerHTML = `
  <style>
    ${css}
  </style>
  ${html}
`

class MyComponent extends HTMLElement {
    private counter: HTMLSpanElement | null = null;

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
        this.counter = this.shadowRoot!.querySelector('#my-button span');
    }

    static get observedAttributes() {
        return ['counter-color'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'counter-color' && oldValue !== newValue) {
            this.updateCounterColor(newValue);
        }
    }

    connectedCallback() {
        const button = this.shadowRoot!.querySelector('#my-button');
        let count = 0;
        this.counter!.textContent = ` ${count}`;
        button!.addEventListener('click', () => {
            count++;
            this.counter!.textContent = ` ${count}`;
        });

        if (this.hasAttribute('counter-color')) {
            this.updateCounterColor(this.getAttribute('counter-color')!);
        }
    }

    private updateCounterColor(color: string) {
        if (this.counter) {
            this.counter.style.color = color;
        }
    }
}

customElements.define('my-component', MyComponent)
