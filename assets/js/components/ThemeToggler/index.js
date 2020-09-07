// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import local
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import ThemeTogglerStyled from './ThemeTogglerStyled';

// == Component
const ThemeToggler = ({ isDark, setDarkTheme, setLightTheme }) => {
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    currentThemeColor === 'theme-dark' ? setDarkTheme() : setLightTheme();
  }, []);

  const handleSwitcher = () => {
    isDark
      ? localStorage.setItem('theme-color', 'theme-light')
      : localStorage.setItem('theme-color', 'theme-dark');
    isDark ? setLightTheme() : setDarkTheme();
  };
  return (
    <ThemeTogglerStyled>
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
    </ThemeTogglerStyled>
  );
};

ThemeToggler.propTypes = {
  isDark: PropTypes.bool.isRequired,
  setLightTheme: PropTypes.func.isRequired,
  setDarkTheme: PropTypes.func.isRequired,
};

// == Export
export default ThemeToggler;
