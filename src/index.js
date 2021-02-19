import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import movies from './mocks/movies-data';

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

ReactDOM.render(
    <App promoMovie={promoMovie} movies={movies} />,
    document.querySelector(`#root`)
);
