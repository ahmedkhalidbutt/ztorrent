import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home/homepage.component';

const Routes  = () => {
    return (
        <Router>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
      </Router>
    )
}

export default Routes;