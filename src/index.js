import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import movies from './mocks/movies';
import singleMovie from './mocks/single-movie';

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(
    <App promoMovie={promoMovie} movies={movies} singleMovie={singleMovie} />,
    document.querySelector(`#root`)
);
