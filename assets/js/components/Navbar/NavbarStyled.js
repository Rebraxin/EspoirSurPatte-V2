import styled from 'styled-components';
import theme from '../../styles/theme';

const NavbarStyled = styled.div`
  width: 75%;
  min-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: inherit;
    font-size: 1.7rem;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 1rem 0;
    display: flex;
    li {
      margin: 0 20px;
      &:last-child {
        margin-right: 0px;
      }
    }
  }
`;

export default NavbarStyled;
