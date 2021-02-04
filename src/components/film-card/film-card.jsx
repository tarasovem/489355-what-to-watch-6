import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({movie}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={ movie.imageURL } alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default FilmCard;
