// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';

// == Import local
import HomeWidgetStyled from './HomeWidgetStyled';
// import Widget from '../Widget';

// == Component
const HomeWidget = () => (
  <HomeWidgetStyled>
    <div className="banner-text-wrapper">
      <h2>Lorem, ipsum dolor sit amet consectetur adipisicing ?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <Link className="banner-btn-link" to="/" >Follow Link</Link>
    </div>
    <div className="banner-img-wrapper">
      <img src="/images/banners/banner-home.jpeg" alt="" />
    </div>
  </HomeWidgetStyled>
);

// == Export
export default HomeWidget;
