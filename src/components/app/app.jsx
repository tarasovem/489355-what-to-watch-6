import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "../main/main";
import AddReview from "../add-review/add-review";
import Films from "../films/films";
import Login from "../login/login";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import NotFoundScreen from "../not-found-screen/not-found-screen";

const App = ({movieList, promoMovie}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Main movieList={movieList} promoMovie={promoMovie} />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/mylist'>
          <MyList />
        </Route>
        <Route exact path='/films/:id'>
          <Films />
        </Route>
        <Route exact path='/films/:id/review'>
          <AddReview />
        </Route>
        <Route exact path='/player/:id'>
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
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
