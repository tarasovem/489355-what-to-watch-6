import React from 'react';
import Main from "../main/main";

const App = (props) => {
  const {movieList} = props;

  return (
    <Main movieList={movieList} />
  );
};

export default App;
