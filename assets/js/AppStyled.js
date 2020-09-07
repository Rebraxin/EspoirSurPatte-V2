import styled from 'styled-components';
import theme from './styles/theme';

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: ${theme.fonts.textFont};
  background-color: ${theme.lightColors.background};
  color: ${theme.lightColors.textColor};
  &.theme-dark {
    background-color: ${theme.darkColors.background};
    color: ${theme.darkColors.textColor};
  }
`;

export default AppStyled;
