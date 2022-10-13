import styled from 'styled-components';

import React from 'react';

export default function Nav() {
  return (
    <NavMenu>
      <h1>
        <a href="#" id="Logo">
          Fotograf
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
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
