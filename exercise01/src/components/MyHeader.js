import { LitElement, css, html } from "lit";

export class MyHeader extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            subtitle: { type: String }
        }
    }

    static get styles() {
        return css`
            .header {
                padding: 30px;
                text-align: center;
                background: white;
            }

            .header h1 {
                font-size: 50px;
            }

            .topnav {
                overflow: hidden;
                background-color: #333;
            }

            .topnav a {
                float: left;
                display: block;
                color: #f2f2f2;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }

            .topnav a:hover {
                background-color: #ddd;
                color: black;
            }

            @media screen and (max-width: 400px) {
                .topnav {
                    padding-bottom: 10px;
                }

                .topnav a {
                    float: none;
                    width: 100%;
                    padding: 0;
                    margin-top: 10px;
                }
            }
        `
    }

    constructor() {
        super();
        this.title = 'My Website';
        this.subtitle = 'Resize the browser window to see the efect';
    }

    render() {
        return html`
            <header class="header">
                <h1>${this.title}</h1>
                <p>${this.subtitle}</p>
            </header>

            <nav class="topnav">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#" style="float:right">Link</a>
            </nav>
        `
    }
}

customElements.define('my-header', MyHeader)