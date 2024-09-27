import { LitElement, css, html } from 'lit';
import './index.css';
import './components/MyHeader';

export class MyElement extends LitElement {
  static get properties() {
    return {
      darkBg: { type: String },
      lightBg: { type: String },
      darkFg: { type: String },
      lightFg: { type: String },
      toggle: { type: Boolean }
    }
  }

  constructor() {
    super()
    this.toggle = false;
    this.darkBg = 'background: #04111a;';
    this.lightBg = 'background: #fbfbfb;';
    this.darkFg = 'color: #000;';
    this.lightFg = 'color: #fff;';
  }

  static get styles() {
    return css`
      .main-container {
        width: 100%;
        height: 100vh;
      }

      .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        background-color: #fff;
      }

      .navbar ul {
        margin-left: 10px;
        display: flex;
        gap: 30px;
      }

      .navbar ul li {
        list-style: none;
        padding: 20px;
      }

      .navbar ul li a {
        text-decoration: none;
        font-size: 1.5rem;
      }

      .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 2em;
        margin-right: 20px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        --background: #05518f;
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--background);
        transition: .5s;
        border-radius: 30px;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 1.4em;
        width: 1.4em;
        border-radius: 50%;
        left: 10%;
        bottom: 15%;
        box-shadow: inset 8px -4px 0px 0px #fff000;
        background: var(--background);
        transition: .5s;
      }

      input:checked + .slider {
        background-color: #2a7abc;
      }

      input:checked + .slider:before {
        transform: translateX(100%);
        box-shadow: inset 15px -4px 0px 15px #fff000;
      }
    `
  }

  render() {
    return html`
      <main class='main-container' style=${this.toggle ? this.lightBg : this.darkBg}>
        <my-header ?toggle=${this.toggle}></my-header>

        <!-- Navbar -->
        <nav class="navbar" style=${this.toggle ? this.darkBg : this.lightBg}>
          <ul>
            <li><a href="#" style=${this.toggle ? this.lightFg : this.darkFg}>Link</a></li>
            <li><a href="#" style=${this.toggle ? this.lightFg : this.darkFg}>Link</a></li>
            <li><a href="#" style=${this.toggle ? this.lightFg : this.darkFg}>Link</a></li>
            <li><a href="#" style=${this.toggle ? this.lightFg : this.darkFg}>Link</a></li>
          </ul>

          <!-- Toggle button -->
          <label class="switch">
          <input type="checkbox">
          <span @click=${this.toggleBtn} class="slider"></span>
        </label>
        </nav>
        
      </main>
    `
  }

  toggleBtn() {
    this.toggle = !this.toggle;
  }
}

window.customElements.define('my-element', MyElement)
