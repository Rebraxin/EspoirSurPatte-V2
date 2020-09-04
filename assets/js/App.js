import React, { useState, useEffect } from 'react';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppStyled from './AppStyled';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    currentThemeColor === 'theme-dark' ? setIsDark(true) : setIsDark(false);
  }, []);

  const handleSwitcher = () => {
    isDark
      ? localStorage.setItem('theme-color', 'theme-light')
      : localStorage.setItem('theme-color', 'theme-dark');
    isDark ? setIsDark(false) : setIsDark(true);
  };
  return (
    <AppStyled className={`app ${isDark ? 'theme-dark' : ''}`}>
      <div className="theme-switcher-wrap">
        <Brightness7Icon className="icons-switcher" />
        <label
          aria-label="switch theme"
          className={`theme-switcher-label ${isDark ? 'active' : ''}`}
          onClick={handleSwitcher}
        >
          <div className="switch-path">
            <div className="switch-handle"></div>
          </div>
        </label>
        <Brightness4Icon className="icons-switcher" />
      </div>

      <Router>
        <Switch>
          <Route exact path="/">
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

export default App;
