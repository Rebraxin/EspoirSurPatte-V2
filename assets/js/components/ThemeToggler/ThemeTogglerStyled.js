// == Import npm
import styled from 'styled-components';

// == Import local
import theme from '../../styles/theme';

// == Component
const ThemeTogglerStyled = styled.div`
  width: 75%;
  min-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0;
  .icons-switcher {
    cursor: pointer;
    font-size: 1rem;
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
    border-bottom: 1px solid transparent;
    &.active {
      color: ${theme.darkColors.textColor};
      &:hover {
        border-bottom: 1px solid ${theme.darkColors.textColor};
      }
    }
    &:hover {
      border-bottom: 1px solid ${theme.lightColors.textColor};
    }
  }
`;

// == Export
export default ThemeTogglerStyled;
