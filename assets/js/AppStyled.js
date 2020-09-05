import styled from 'styled-components';
import theme from './styles/theme';

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.lightColors.bgColor};
  color: ${theme.lightColors.textColor};
  &.theme-dark {
    background-color: ${theme.darkColors.bgColor};
    color: ${theme.darkColors.textColor};
  }
  .theme-switcher-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: right;
    padding: 0.5rem 0.8rem;
    .icons-switcher {
      cursor: pointer;
      font-size: 1.2rem;
      color: ${theme.lightColors.textColor};
      &.active {
        color: ${theme.darkColors.textColor};
      }
    }
    .text-switcher {
      cursor: pointer;
      padding-left: 0.2rem;
      color: ${theme.lightColors.textColor};
      font-size: 0.8rem;
      &.active {
        color: ${theme.darkColors.textColor};
      }
    }
  }
`;

export default AppStyled;
