import { createElement } from '../render.js';
import createFilmDetailsFormTemplate from './film-details-form-template.js';

function createFilmDetailsViewTemplate() {
  return `
    <section class="film-details">
      ${createFilmDetailsFormTemplate()}
    </section>
  `;
}

export default class FilmDetailsView {
  getTemplate() {
    return createFilmDetailsViewTemplate();
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
