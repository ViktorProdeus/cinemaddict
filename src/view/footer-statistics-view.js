import { createElement } from '../render.js';

function createFooterStatisticsViewTemplate() {
  return `
    <section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>
  `;
}

export default class FooterStatisticsView {
  getTemplate() {
    return createFooterStatisticsViewTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
