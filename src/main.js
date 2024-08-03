import FilmsPresenter from './presenter/films-presenter';
import { render } from './render';
import FooterStatisticsView from './view/footer-statistics-view';
import HeaderProfileView from './view/header-profile-view';
import MainNavigationView from './view/main-navigation-view';

const bodyElement = document.querySelector('body');
const siteHeaderElement = bodyElement.querySelector('.header');
const siteMainElement = bodyElement.querySelector('.main');
const siteFooterElement = bodyElement.querySelector('.footer');
const siteFooterStatisticsElement = siteFooterElement.querySelector(
  '.footer__statistics'
);

const filmsPresenter = new FilmsPresenter();

render(new HeaderProfileView(), siteHeaderElement);
render(new MainNavigationView(), siteMainElement);
render(new FooterStatisticsView(), siteFooterStatisticsElement);

filmsPresenter.init(siteMainElement);
