import React from 'react';
import Main from "../main/main";

const App = (props) => {
  const {movieList, promoMovie} = props;

  return (
    <Main movieList={movieList} promoMovie={promoMovie} />
  );
};

export default App;
