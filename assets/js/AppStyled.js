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
`;

export default AppStyled;
