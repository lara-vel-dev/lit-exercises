import { LitElement, css, html } from 'lit'
import './components/MyHeader'
import './components/MyCard'
import './components/MySidebar'
import './components/MyFooter'

export class MyElement extends LitElement {
  static get properties() {
    return {
      docsHint: { type: String },
      count: { type: Number },
    }
  }

  static get styles() {
    return css`
        .row::after {
          content: "";
          display: table;
          clear: both;
      }

        .leftcolumn {   
          float: left;
          width: 75%;
        }

      .rightcolumn {
        float: left;
        width: 23%;
        background-color: #f1f1f1;
        padding-left: 20px;
      }

      @media screen and (max-width: 800px) {
        .leftcolumn, .rightcolumn {   
          width: 100%;
          padding: 0;
        }
      } 
    `
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <my-header></my-header>
      <div class="row">
        <div class="leftcolumn">
          <my-card></my-card>
          <my-card date="Sep 2, 2017"></my-card>
        </div>
        <div class="rightcolumn">
          <my-sidebar title="About Me"></my-sidebar>
          <my-sidebar title="Popular Post" imageCount="3" content=""></my-sidebar>
          <my-sidebar title="Follow Me" imageCount="0"></my-sidebar>
        </div>
      </div>
      <my-footer></my-footer>
    `
  }

}

window.customElements.define('my-element', MyElement)
