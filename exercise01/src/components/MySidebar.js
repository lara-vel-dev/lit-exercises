import { LitElement, css, html } from "lit";

export class MySidebar extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            imageCount: { type: Number },
            content: { type: String }
        }
    }

    static get styles() {
        return css`
            .fakeimg {
                background-color: #aaa;
                width: 95%;
                padding: 10px;
                height: 90px;
            }

            .card {
                background-color: white;
                padding: 20px;
                margin-top: 20px;
            }
        `
    }

    constructor() {
        super()
        this.title = 'Title';
        this.imageCount = 1
        this.content = 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    }

    render() {
        return html`
            <div class="card">
                <h2>${this.title}</h2>
                ${this.renderImages()}
                <p>${this.content}</p>
            </div>
        `
    }

    renderImages() {
        return html`
            ${Array.from({ length: this.imageCount }).map(() => html`
                <div class="fakeimg">Imagen</div>
            `)}
        `;
    }
}

customElements.define('my-sidebar', MySidebar)