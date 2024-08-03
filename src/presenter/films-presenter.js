import { render } from '../render';
import FilmCardView from '../view/film-card-view';
import FilmDetailsView from '../view/film-details-view';
import FilmsListButtonMoreView from '../view/films-list-button-more-view';
import FilmsListContainerView from '../view/films-list-container-view';
import FilmsListView from '../view/films-list-view';
import FilmsView from '../view/films-view';
import SortView from '../view/sort-view';

const RENDER_COUNT = 4;

export default class FilmsPresenter {
  sortComponent = new SortView();
  filmsComponent = new FilmsView();
  filmListComponent = new FilmsListView();
  filmListContainerComponent = new FilmsListContainerView();
  filmButtonMoreComponent = new FilmsListButtonMoreView();

  init = (container) => {
    this.container = container;

    render(this.sortComponent, this.container);
    render(this.filmsComponent, this.container);
    render(this.filmListComponent, this.filmsComponent.getElement());
    render(
      this.filmListContainerComponent,
      this.filmListComponent.getElement()
    );

    for (let i = 0; i < RENDER_COUNT; i++) {
      render(new FilmCardView(), this.filmListContainerComponent.getElement());
    }

    render(this.filmButtonMoreComponent, this.filmListComponent.getElement());

    render(new FilmDetailsView(), this.container.parentElement);
  };
}
