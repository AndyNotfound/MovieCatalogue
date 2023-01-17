import UrlParser from "../../routes/url-parser";
import TheMovieDbSource from "../../data/themoviedb-source";
import likeButtonInitiator from "../../utils/like-button-initiator";

import {
  createMovieDetailTemplate,
  createLikeButtonTemplate,
} from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector("#movie");
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    const likeButtonContainer = document.querySelector("#likeButtonContainer");
    likeButtonContainer.innerHTML = likeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
      },
    });
  },
};

export default Detail;
