import { LitElement, css, html } from "lit";

export class MyCard extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            date: { type: String },
            content: { type: String }
        }
    }

    static get styles() {
        return css`
            .fakeimg {
                background-color: #aaa;
                width: 95%;
                padding: 20px;
            }

            .card {
                background-color: white;
                padding: 20px;
                margin-top: 20px;
            }

            @media screen and (max-width: 800px) {
                .fakeimg {   
                    padding: 0;
                }
            } 
        `
    }

    constructor() {
        super()
        this.title = 'TITLE HEADING';
        this.date = 'Dec 7, 2017'
        this.content = 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    }

    render() {
        return html`
            <div class="card">
                <h2>${this.title}</h2>
                <h5>Title description, ${this.date}</h5>
                <div class="fakeimg" style="height:200px;">Image</div>
                <p>Some text..</p>
                <p>${this.content}</p>
            </div>
        `
    }


}

customElements.define('my-card', MyCard)