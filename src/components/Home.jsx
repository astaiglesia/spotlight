import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import Header from './Header';

const Home = (props) => {
  return (
    <div className="login">
      <Header/>
      <Button variant="info" type="submit">
        connect to spotify
      </Button>
    </div>
  )
};

export default Home;
