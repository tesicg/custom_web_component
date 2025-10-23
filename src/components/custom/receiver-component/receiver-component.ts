import html from './receiver-component.html?raw'
import css from './receiver-component.css?raw'

const template = document.createElement('template')
template.innerHTML = `<style>${css}</style>${html}`

class ReceiverComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot!.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {
        document.addEventListener('my-custom-event', (event: any) => {
            this.shadowRoot!.querySelector(
                'p'
            )!.textContent = `Event received: ${event.detail.message}`
        })
    }
}

customElements.define('receiver-component', ReceiverComponent)
