import React from 'react';
import { Link } from  'react-router-dom';
import Header from './Header';

const Error404 = () => {
  return (
    <React.Fragment>
      <Header/>
      page not found. return to <Link to="/dashboard">dashboard</Link>
    </React.Fragment>
  )
}

export default Error404;