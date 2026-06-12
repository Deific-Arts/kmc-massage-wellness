import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles.css?inline';
import { isElementInView } from '../../shared/utilities';
import { ZustandController } from '../../controllers/zustand';
import appStore, { type AppStore } from '../../stores/app';


@customElement('kmc-hero')
export default class KmcHero extends LitElement {
  static styles = [unsafeCSS(styles)];
  @property() videoSrc: string = '/media/hero.mp4';

  private appController: ZustandController<AppStore, {
  }, {
    setMainNavFilled: (filled: boolean) => void;
  }>

  constructor() {
    super();
    this.appController = new ZustandController(this, appStore, (state) => ({
    }), (state) => ({
      setMainNavFilled: state.setMainNavFilled
    }));
  }

  firstUpdated() {
    isElementInView(this, (inView) => {
      if (inView) {
        this.appController.actions?.setMainNavFilled(false);
      } else {
        this.appController.actions?.setMainNavFilled(true);
      }
    });
  }

  render() {
    return html`
      <video autoplay loop muted>
        <source src=${this.videoSrc} type="video/mp4" />
      </video>
      <section>
        <div><slot></slot></div>
      </section>
      <div class="overlay"></div>
    `;
  }
}
