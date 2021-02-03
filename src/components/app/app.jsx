import React from 'react';
import PropTypes from 'prop-types';
import Main from "../main/main";

const App = (props) => {
  const {movieList, promoMovie} = props;

  return (
    <Main movieList={movieList} promoMovie={promoMovie} />
  );
};

App.propTypes = {
  movieList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
  ).isRequired,
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  })
};

export default App;
