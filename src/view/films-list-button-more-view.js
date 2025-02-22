import { createElement } from '../render.js';

function createFilmsListButtonMoreViewTemplate() {
  return `
    <button class="films-list__show-more">Show more</button>
  `;
}

export default class FilmsListButtonMoreView {
  getTemplate() {
    return createFilmsListButtonMoreViewTemplate();
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
