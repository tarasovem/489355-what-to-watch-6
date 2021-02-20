import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {onMovieCardMouseEnter, movieId, posterImage, name} = props;
  const handleMovieCardMouseEnter = () => {
    onMovieCardMouseEnter(movieId);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMovieCardMouseEnter}>
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`/films/${movieId}`} className="small-movie-card__link">{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onMovieCardMouseEnter: PropTypes.func,
  movieId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  posterImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MovieCard;
