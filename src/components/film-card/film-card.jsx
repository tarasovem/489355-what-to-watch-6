import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({onFilmCardMouseEnter, filmId, posterImage, name}) => {
  const handleFilmCardMouseEnter = () => {
    onFilmCardMouseEnter(filmId);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleFilmCardMouseEnter}>
      <div className="small-movie-card__image">
        <img src={ posterImage } alt={ name } width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{ name }</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  onFilmCardMouseEnter: PropTypes.func,
  filmId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FilmCard;
