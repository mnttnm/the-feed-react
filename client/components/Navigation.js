import React, { PureComponent } from "react";
import styled from 'styled-components';

const Navigation = (props) => {
    return (
        <Nav id="menu">
        <List>
          <Link href="https://codingcoach.io/">About</Link>
          <Link href="https://docs.google.com/document/d/1zKCxmIh0Sd4aWLiQncICOGm6uf38S0kJ0xb0qErNFVA/edit">
            Contact
          </Link>
        </List>
      </Nav>
    );
}

const Nav = styled.nav`
  flex-grow: 1;
`;

const List = styled.ul`
  list-style: none;
  display: flex;

  @media all and (min-width: 801px) {
    padding: 0;
    margin: 0;
  }

  @media all and (max-width: 800px) {
    margin-top: 100px;
    flex-direction: row;
  }
`;

const Link = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  padding: 10px;
  font-size: 16px;

  @media all and (max-width: 800px) {
    padding-left: 0;
    color: #fff;
  }

  &:hover {
    color: #2c2c2c;
  }
`;
export default Navigation;