import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppStyled from './AppStyled';
import Home from './pages/Home';
import Navbar from './containers/Navbar';
import ThemeToggler from './containers/ThemeToggler';

const App = ({ isDark }) => {
  return (
    <AppStyled className={`${isDark ? 'theme-dark' : ''}`}>
      <Router>
        <ThemeToggler />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/adoption">
            <h1>Adoption</h1>
          </Route>
          <Route exact path="/news">
            <h1>News</h1>
          </Route>
          <Route exact path="/association">
            <h1>Association</h1>
          </Route>
          <Route exact path="/about">
            <h1>About</h1>
          </Route>
          <Route exact path="/contact">
            <h1>Contact</h1>
          </Route>
        </Switch>
      </Router>
    </AppStyled>
  );
};

App.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default App;
