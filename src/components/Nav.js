import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Nav() {
  return (
    <NavMenu>
      <h1>
        <Link to="/" id="Logo">
          Fotograf
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </NavMenu>
  );
}

const NavMenu = styled.nav`
  background: #282828;
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;

  #Logo {
    font-size: 1.7rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  ul {
    display: flex;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;
