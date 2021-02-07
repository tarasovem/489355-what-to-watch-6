import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <Fragment>
      <h1>404. Page not found</h1>
      <Link to='/'>Вернуться на главную страницу</Link>
    </Fragment>
  );
};

export default NotFoundScreen;
