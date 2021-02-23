import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoPlayer from "../video-player/video-player";

const MovieCard = (props) => {
  const {onMovieCardMouseEnter, movieId, posterImage, name, previewVideoLink} = props;
  const [isPlaying, setPlaying] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const VIDEO_TIMEOUT = 1000;

  const handleMovieCardMouseEnter = (evt) => {
    evt.preventDefault();
    onMovieCardMouseEnter(movieId);
    setHovered(true);
  };

  useEffect(() => {
    const movieTimeout = setTimeout(() => {
      if (isHovered) {
        setPlaying(true);
      }
    }, VIDEO_TIMEOUT);
    return () => {
      clearTimeout(movieTimeout);
    };
  });

  const handleMovieCardMouseLeave = (evt) => {
    evt.preventDefault();
    setPlaying(false);
    setHovered(false);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={handleMovieCardMouseEnter} onMouseLeave={handleMovieCardMouseLeave}>
      <div className="small-movie-card__image">
        {isPlaying ?
          <VideoPlayer previewVideoLink={previewVideoLink}/>
          :
          <img src={posterImage} alt={name} width="280" height="175"/>
        }
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
  previewVideoLink: PropTypes.string.isRequired,
};

export default MovieCard;
