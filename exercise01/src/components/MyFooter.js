import { LitElement, css, html } from "lit";

export class MyFooter extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            subtitle: { type: String }
        }
    }

    static get styles() {
        return css`
           .footer {
                padding: 20px;
                text-align: center;
                background: #ddd;
                margin-top: 20px;
            }
        `
    }

    constructor() {
        super();
        this.title = 'Footer';
    }

    render() {
        return html`
            <footer class="footer">
                <h2>${this.title}</h2>
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)