import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import MovieDetails from '../pages/MovieDetails';
import Navbar from '../components/navbar/navbar.component';

const Routes  = () => {
    return (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact children={<HomePage />} />
            <Route path="/movie/:slug" children={<MovieDetails />} />
          </Switch>
      </Router>
    )
}

export default Routes;