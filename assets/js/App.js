import React, { useState, useEffect } from 'react';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppStyled from './AppStyled';
import Home from './pages/Home';

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
        <BrightnessMediumIcon
          className={`icons-switcher ${isDark ? 'active' : ''}`}
        />
        <a
          title="Toggle the website theme"
          onClick={handleSwitcher}
          className={`text-switcher ${isDark ? 'active' : ''}`}
        >
          {isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        </a>
      </div>

      <Router>
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

export default App;
