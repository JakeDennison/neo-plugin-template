import { LitElement, html, css } from 'lit';

class TemplateElement extends LitElement {
  
  static getMetaConfig() {
    // plugin contract information
    return {
      controlName: 'neo-plugin-template', // This is the plugin's control name, important to know when importing.
      fallbackDisableSubmit: false,
      description: '',
      iconUrl: '',
      groupName: 'NEO', // Change this to alter the group the plugin will appear in.
      version: '1.0',
      properties: { // These properties are shown in the config panel of the control
        message: {
          type: 'string',
          title: 'Source',
          description: ''
        },
        response: {
          type: 'string',
          title: 'Response',
          description: '',
          isValueField: true, // This is used to mark a property as the output variable, it is stored using a custom event
        },
      },
      events: ["ntx-value-change"], // This is the custom event.
      standardProperties: {
        fieldLabel: true,
        description: true,
      }
    };
  }

  onChange(e) { // This is the function to be called to store the value
    const args = {
        bubbles: true,
        cancelable: false,
        composed: true,
        // Value coming from input change event. 
        detail: e.target.value,
    };
    const event = new CustomEvent('ntx-value-change', args);
    this.dispatchEvent(event);
  }

  static properties = { // This is used to initialize the properties for the plugin
    message: { type: String },
    response: { type: String },
  };

  static styles = css` // Enter any CSS you want to use here
    :host {
      display: block;
      padding: 16px;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .highlight {
      font-weight: 700;
      color: #E8960A;
    }
    #pluginDiv {
      padding: 16px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    textarea {
      width: 100%;
      height: 100px;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
    textarea:focus {
      border-color: #E8960A;
      outline: none;
    }
  `;

  constructor() { // This is used to initialize the properties
    super();
    this.message = ''; 
    this.response = '';
  }

  render() { // This is where you define what you want to render in the plugin
    return html`
      <div id="pluginDiv">
        <p>This is a template.</p>
        <p>This is my message: <span class="highlight">${this.message}</span></p>
        <hr>
        <p>Would you like to respond?</p>
        <div>
          <span>Response:</span>
        </div>
        <textarea .value=${this.response} @blur=${this.onChange}></textarea>
      </div>
    `;
  }
}

customElements.define('neo-plugin-template', TemplateElement);
