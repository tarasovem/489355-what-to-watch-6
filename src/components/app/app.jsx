import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main";
import AddReview from "../add-review/add-review";
import Movies from "../movies/movies";
import Login from "../login/login";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import NotFoundScreen from "../not-found-screen/not-found-screen";

const App = (props) => {
  const {promoMovie, movies, singleMovie} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main promoMovie={promoMovie} movies={movies} />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/mylist'>
          <MyList movies={movies} />
        </Route>
        <Route exact path='/films/:id'>
          <Movies />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview />
        </Route>
        <Route exact path='/player/:id'>
          <Player movie={singleMovie} />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
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

export default App;
