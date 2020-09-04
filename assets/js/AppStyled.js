import styled from 'styled-components';
import theme from './styles/theme';

const AppStyled = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: ${theme.colors.lightBg};
  color: ${theme.colors.lightColor};
  &.theme-dark {
    background-color: ${theme.colors.darkBg};
    color: ${theme.colors.darkColor};
  }
  .theme-switcher-wrap {
    width: 100%;
    text-align: right;
    .theme-switcher-label {
      display: inline-block;
      cursor: pointer;
      .switch-path {
        width: 40px;
        height: 20px;
        border-radius: 10px;
        background: #ccc;
        transition: all 0.3s ease-in-out;
        .switch-handle {
          background: #999;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          transition: all 0.3s ease-in-out;
        }
      }
      &.active {
        .switch-path {
          background: #555;
        }
        .switch-handle {
          transform: translateX(20px);
          background: #7bbb5e;
        }
      }
    }
  }
`;

export default AppStyled;
