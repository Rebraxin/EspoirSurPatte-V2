import React, { useState, useEffect } from 'react';
import AppStyled from './AppStyled';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
    console.log('Fonctionne depuis App');
  };
  return (
    <AppStyled className={`app ${isDark ? 'theme-dark' : ''}`}>
      <div className="theme-switcher-wrap">
        <label
          className={`theme-switcher-label ${isDark ? 'active' : ''}`}
          onClick={handleSwitcher}
        >
          <div className="switch-path">
            <div className="switch-handle"></div>
          </div>
        </label>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
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
