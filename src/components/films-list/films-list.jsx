import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from "../film-card/film-card";

const FilmsList = ({films}) => {
  const [activeCardId, setActiveCardId] = useState({
    filmId: ``
  });

  const handleFilmCardMouseEnter = (id) => {
    setActiveCardId({...activeCardId, filmId: id});
  };

  return (
    <div className="catalog__movies-list">
      {films.map(({id, ...rest}) => <FilmCard key={id} filmId={id} {...rest} onFilmCardMouseEnter={handleFilmCardMouseEnter} />)}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
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

export default FilmsList;
