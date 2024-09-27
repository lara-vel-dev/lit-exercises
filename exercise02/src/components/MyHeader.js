import { LitElement, css, html } from 'lit'

export class MyHeader extends LitElement {
  static get properties() {
    return {
        darkBg: { type: String },
        lightBg: { type: String },
        lightBgSection: { type: String },
        darkFg: { type: String },
        lightFg: { type: String },
        title: { type: String },
        toggle: { type: Boolean }
    }
  }

  constructor() {
    super()
    this.toggle = false;
    this.darkBg = 'background: #04111a;';
    this.lightBg = 'background: #fbfbfb;';
    this.lightBgSection  = 'background: #fff;';
    this.darkFg = 'color: #000;';
    this.lightFg = 'color: #fff;';
    this.title = "Dani's Blog";
  }

  static get styles() {
    return css`
      .header {
        width: 100%;
      }

      p {
        margin: 0;
        background-color: #bae4ff;
        padding: 10px;
        font-size: 1.2rem;
        text-align: center;
      }

      .header-section {
        width: 100%;
        padding: 50px 0;
      }

      h2 {
        font-size: 2.2rem;
        text-align: center;
        margin: 0;
      }
    `
  }

  render() {
    return html`
      <header class='header' style=${this.toggle ? this.lightBg : this.darkBg}>
        <p>The best programming blog in the world!</p>
        <section class='header-section' style=${this.toggle ? this.lightBgSection : this.darkBg}>
            <h2  style=${this.toggle ? this.darkFg : this.lightFg}>${this.title}</h2>
        </section>
      </header>
    `
  }

  toggleBtn() {
    this.toggle = !this.toggle;
  }
}

customElements.define('my-header', MyHeader);
