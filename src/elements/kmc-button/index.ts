import { html, LitElement, unsafeCSS} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles.css?inline';

@customElement('kmc-button')
export default class KmcButton extends LitElement {
  static styles = [unsafeCSS(styles)];

  @property({ type: String, reflect: true })
  variant: 'primary' | 'secondary' = 'primary';

  render() {
    return html`
      <button>
        <span><slot></slot></span>
      </button>
    `;
  }
}
