import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card";

const MoviesList = (props) => {
  const {movies} = props;
  const [activeCardId, setActiveCardId] = useState(``);

  const handleMovieCardMouseEnter = (id) => {
    setActiveCardId(id);
  };

  return (
    <div className="catalog__movies-list">
      {movies.map(({id, ...rest}) => (
        <MovieCard
          key={id}
          filmId={id}
          {...rest}
          activeCardId={activeCardId}
          onMovieCardMouseEnter={handleMovieCardMouseEnter} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        posterImage: PropTypes.string.isRequired,
        previewImage: PropTypes.string.isRequired,
        backgroundImage: PropTypes.string.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        videoLink: PropTypes.string.isRequired,
        previewVideoLink: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        scoresCount: PropTypes.number.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string.isRequired),
        runTime: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        released: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired
      }).isRequired,
  ).isRequired,
};

export default MoviesList;
