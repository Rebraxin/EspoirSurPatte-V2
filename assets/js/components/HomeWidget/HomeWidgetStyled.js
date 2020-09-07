// == Import npm
import styled from 'styled-components';

// == Import local
import theme from '../../styles/theme'

// == Component
const HomeWidgetStyled = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  text-align: right;
  .banner-img-wrapper {
    &::before {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: #00000060;
      z-index: 1;
    }
    img {
      position: absolute;
      display: block;
      width: 100%;
      height: 350px;
      object-fit: cover;
      object-position: 50% 30%;
    }
  }

  .banner-text-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-25%, -75%);
    font-size: 18px;
    color: white;
    text-shadow: 2px 2px 6px #00000060, -2px -2px 6px #00000060;
    z-index: 2;
    h2 {
      font-size: 2em;
    }
    p {
      margin-bottom: 20px;
    }
    .banner-btn-link {
      text-decoration: none;
      color: white;
      border: 1px solid white;
      padding: 10px 20px;
      border-radius: 20px;
      box-shadow: 2px 2px 6px #00000020, -2px -2px 6px #00000020;
      &:hover {
        background-color: #fff;
        color: ${theme.darkColors.primary};
      }
    }
  }
`;

// == Export
export default HomeWidgetStyled;
