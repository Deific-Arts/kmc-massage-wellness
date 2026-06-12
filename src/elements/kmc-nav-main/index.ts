import { html, LitElement, unsafeCSS} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ZustandController } from '../../controllers/zustand';
import appStore, { type AppStore } from '../../stores/app';
import styles from './styles.css?inline';

@customElement('kmc-nav-main')
export default class KmcNavMain extends LitElement {
  static styles = [unsafeCSS(styles)];

  private appController: ZustandController<AppStore, {
    drawerOpened: AppStore['drawerOpened'];
    bookModalOpened: AppStore['bookModalOpened'];
    mainNavFilled: AppStore['mainNavFilled'];
  }, {
    setDrawerOpened: AppStore['setDrawerOpened'];
    setBookModalOpened: AppStore['setBookModalOpened'];
  }>

  constructor() {
    super();
    this.appController = new ZustandController(this, appStore, (state) => ({
      drawerOpened: state.drawerOpened,
      bookModalOpened: state.bookModalOpened,
      mainNavFilled: state.mainNavFilled,
    }), (state) => ({
      setDrawerOpened: state.setDrawerOpened,
      setBookModalOpened: state.setBookModalOpened,
    }));
  }

  @property({ type: Boolean, reflect: true })
  filled = false;

  updated() {
    this.filled = this.appController.data.mainNavFilled;
  }

  render() {
    return html`
      <section>
        <img src="/logo/transparent.png" alt="KMC Massage & Wellness Logo" width="148">
        <nav>
          <slot></slot>
        </nav>
        <div>
          <kmc-button variant="primary" @click=${this.handleBookClick}>Book Now</kmc-button>
          <button @click=${this.handleDrawerToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
        </div>
      </section>
    `;
  }

  private handleBookClick() {
    this.appController.actions?.setBookModalOpened(!this.appController.data.bookModalOpened);
  }

  private handleDrawerToggle() {
    this.appController.actions?.setDrawerOpened(!this.appController.data.drawerOpened);
  }
}
