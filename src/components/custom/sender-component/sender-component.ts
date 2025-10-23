import html from './sender-component.html?raw'
import css from './sender-component.css?raw'

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

class SenderComponent extends HTMLElement {
    private _message: string = 'Hello from Sender!'

    static get observedAttributes() {
        return ['message']
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'message' && oldValue !== newValue) {
            this._message = newValue
        }
    }

    connectedCallback() {
        if (this.hasAttribute('message')) {
            this._message = this.getAttribute('message')!
        }

        this.shadowRoot!.querySelector('button')!.addEventListener(
            'click',
            () => {
                const event = new CustomEvent('my-custom-event', {
                    bubbles: true,
                    composed: true,
                    detail: { message: this._message },
                })
                this.dispatchEvent(event)
            }
        )
    }
}

customElements.define('sender-component', SenderComponent)
