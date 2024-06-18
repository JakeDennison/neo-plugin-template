import { LitElement, html, css } from 'lit';

class templateElement extends LitElement {
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-template',
      fallbackDisableSubmit: false,
      description: '',
      iconUrl: "",
      groupName: 'NEO',
      version: '1.0',
      properties: {
        src: {
          type: 'string',
          title: 'Source',
          description: 'Source URL'
        },
      },
      standardProperties: {
        fieldLabel: true,
        description: true,
      }
    };
  }

  static properties = {
    src: '',
  };

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }
  
  constructor() {
    super();
    this.src = '';
  }

  render() {''
  }
}

customElements.define('neo-template', templateElement);
