import styled from 'styled-components';
import theme from '../../styles/theme';

const NavbarStyled = styled.div`
  width: 100%;
  background-color: ${theme.lightColors.background};
  box-shadow: 2px 2px 10px #00000020;
  div {
    width: 75%;
    min-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .brand {
      font-family: ${theme.fonts.brandFont};
      color: ${theme.lightColors.textColor};
      text-decoration: none;
      font-size: 1.3rem;
    }
    .nav-links {
      text-decoration: none;
      color: ${theme.lightColors.textColor};
      font-size: 1.1rem;
      padding: 0rem 0.2rem;
      position: relative;
      text-transform: capitalize;
      font-weight: 700;
      letter-spacing: 0.8px;
      z-index: 1;
      &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 4px;
        background: ${theme.lightColors.primary};
        left: 0;
        bottom: -5px;
        transform: scaleY(0);
        transition: all 0.4s ease-in-out;
        transform-origin: bottom;
        z-index: -1;
      }
      &:hover::before {
        transform: scaleY(1);
      }
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 1rem 0;
      display: flex;
      li {
        margin: 0 10px;
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
  &.theme-dark {
    background-color: ${theme.darkColors.backgroundVariant};
    div {
      .brand {
        color: ${theme.darkColors.textColor};
      }
      .nav-links {
        color: ${theme.darkColors.textColor};
        &::before {
          background: ${theme.darkColors.primary};
        }
      }
    }
  }
`;

export default NavbarStyled;
