import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import MovieDetailsPage from '../pages/MovieDetails';
import Navbar from '../components/navbar/navbar.component';
import PlayMoviePage from '../pages/PlayMovie';

const Routes  = () => {
    return (
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact children={<HomePage />} />
            <Route path="/movie/:slug" exact children={<MovieDetailsPage />} />
            <Route path="/movie/:slug/play" exact children={<PlayMoviePage />} />
          </Switch>
      </Router>
    )
}

export default Routes;